export class Profile {
    id?: string | null;
    username?: string | null;
    email?: string | null;
    profilePictureURL?: string | null;
    profilePicture?: S3Object | null;
}



type S3Object = {
    bucket: string
    region: string
    key: string
}