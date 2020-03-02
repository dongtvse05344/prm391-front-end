import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService, NbSearchService } from '@nebular/theme';
import { map, takeUntil, takeWhile } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService, TransferService, LayoutService, GlobalService } from 'src/app/services';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;
  username = '';
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [
    {
      title: 'Profile',
      link: 'profile',
      icon: 'person-outline'
    },
    {
      title: 'Sign-out',
      link: 'logout',
      icon: 'log-out-outline'
    }
  ];
  picture: any;
  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    private globalService: GlobalService,
    private authService: AuthService,
    private transferService: TransferService,
    private router: Router,
    private searchService: NbSearchService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
    this.username = this.globalService.getUserName();
    this.menuService.onItemClick()
      .subscribe(
        (selected) => {
          if (selected.item.link === 'logout') {
            this.logout();
          } else {
            this.router.navigate(['core/' + selected.item.link]);
          }

        }
      );
    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        console.log(data);
      });
    this.searchService.onSearchInput()
      .subscribe((data: any) => {
        console.log(data);
      });
    // this.authService.getAvatar().subscribe(data => {
    //   const reader = new FileReader();
    //   reader.onload = (e: any) => {
    //     this.picture = e.target.result;
    //   };
    //   reader.readAsDataURL(data);
    // }, err => {
    //   this.picture = '../../../../assets/none.jpg';
    // });
    // this.transferService.getAvatar().subscribe(data => {
    //   this.picture = data ? data : '../../../../assets/none.jpg';
    // });
    this.picture = '../../../../assets/none.jpg';
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  logout() {
    this.transferService.unsubAvatar();
    this.globalService.clearToken();
    this.router.navigate(['auth']);
  }
}
