export type TypeTitleLogin = {
    title: string;
}

export interface TypeDataForm {
    email: string;
    password: string;
    name: string;
}

export interface TypeInformationNewAccount  {
    id: number;
    name: string;
    email: string; 
    password: string;
    role: string;

}

export interface TypeMovieApi {
    id: number;
    nameMovie: string;
    category: string;
    image: string;
    slug: string;
    minutes: string;
    description: string;
}

export interface TypeOpenMenu {
    setOpen: (bool: boolean) => void;
    open: boolean;
}
