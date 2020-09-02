import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Category, CategoryCM } from "src/app/view-models";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  apiPaths = environment.apiLink;

  constructor(private http: HttpClient) {}

  // Get all categories
  getAll = (): Promise<Category[]> => {
    return this.http
      .get<Category[]>(
        `${this.apiPaths.endPoint}${this.apiPaths.basic.category.main}`
      )
      .toPromise();
  };

  // Create new collection
  create(category: CategoryCM): Promise<any> {
    const reqHeader = new HttpHeaders({ "Content-Type": "application/json" });

    return new Promise((resolve) => {
      this.http
        .post(
          `${this.apiPaths.endPoint}${this.apiPaths.basic.category.main}`,
          {
            name: category.Name
          },
          { headers: reqHeader }
        )
        .subscribe(
          (data) => {
            resolve(data);
            alert("New category has been created successfully.");
          },
          (error) => {
            console.error(
              "Error at category - create(): " + JSON.stringify(error)
            );
          }
        );
    });
  }
  // Set BannerPath (image) for the newest product
  setLogoPath(img: File, id: number): Promise<any> {
    let formData = new FormData();
    formData.append("image", img);

    return new Promise((resolve) => {
      this.http
        .post(
          `${this.apiPaths.endPoint}${this.apiPaths.basic.category.img}?id=${id}`,
          formData
        )
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error) => {
            console.error(
              "Error at CategoryService - setBannerPath(): " +
                JSON.stringify(error)
            );
          }
        );
    });
  }
}
