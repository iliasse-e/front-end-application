export const articles: ArticleType[] = [
    {
        id: "00000001",
        title: "Tabouret en osier dur",
        brand: "Wilson guji",
        price: 50,
        currency: "€",
        imageUrl: "https://cdn.laredoute.com/products/6/0/8/6089aea3426c0b5c13c8262932cee06f.jpg?imgopt=twic&twic=v1/cover=700x700",
        available: true,
        dimensions : {
            height: 66,
            with: 45,
            length: 65 
        },
        color : "Naturel/clair"
    },
    {
        id: "00000002",
        title: "Tabouret en bois recyclé",
        brand: "Wilson guji",
        price: 50,
        currency: "€",
        imageUrl: "https://cdn.laredoute.com/products/c/4/1/c411c2f87f8a2addd0f9d8bf895851c2.jpg?imgopt=twic&twic=v1/cover=700x700",
        available: true,
        dimensions : {
            height: 66,
            with: 45,
            length: 65 
        },
        color : "Naturel/clair"
    },
    {
        id: "00000001",
        title: "Tabouret teck et cuir",
        brand: "Miliba",
        price: 180,
        currency: "€",
        imageUrl: "https://cdn.laredoute.com/products/e/6/0/e6064d1e05de0c1de5d3798717727930.jpg?imgopt=twic&twic=v1/cover=1200x1200",
        available: true,
        dimensions : {
            height: 88,
            with: 45,
            length: 75 
        },
        color : "Marron clair"
    },
    {
        id: "00000004",
        title: "Tabouret haut",
        brand: "Huila north",
        price: 80,
        currency: "€",
        imageUrl: "https://cdn.laredoute.com/products/b/b/f/bbf0120e3cb97d2796385ff802506fb5.jpg?imgopt=twic&twic=v1/cover=1200x1200",
        available: true,
        dimensions : {
            height: 116,
            with: 45,
            length: 65 
        },
        color : "Naturel/clair"
    }
]

export interface ArticleType {
    id: string
    title: string
    brand: string
    price: number
    currency: string
    imageUrl: string
    available: true
    dimensions : {
        height: number
        with: number
        length: number 
    }
    color : string
}