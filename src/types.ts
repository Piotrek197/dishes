export type DishType = {
    [key: string]: KeyType,
    name: string,
    type: DishCategoryType,
    preparation_time: string,
    
    //pizza types
    no_of_slices?: number | "",
    diameter?: number | ""

    //soup types
    spiciness_scale?: number | "" //1|2|3|4|5|6|7|8|9|10

    //sanwich types
    slices_of_bread?: number | ""

}

export type ErrorsType = {
    name?: string,
    type?: string,
    preparation_time?: string;
    no_of_slices?: string,
    diameter?: string
    spiciness_scale?: string
    slices_of_bread?: string
}

export type KeyType = string | number | DishCategoryType | undefined;

export type DishCategoryType = "pizza" | "soup" | "sandwich" | null