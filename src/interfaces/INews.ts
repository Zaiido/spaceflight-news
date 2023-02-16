export interface INews {
    id:          number;
    title:       string;
    url:         string;
    imageUrl:    string;
    newsSite:    string;
    summary:     string;
    publishedAt: Date;
    updatedAt:   Date;
    featured:    boolean;
    launches:    ILaunch[];
    events:      any[];
}

export interface ILaunch {
    id:       string;
    provider: string;
}
