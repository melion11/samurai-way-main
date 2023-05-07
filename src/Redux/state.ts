type RootStateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
}
type ProfilePageType = {
    postsData: PostType[];

}
type DialogsPageType = {
    dialogsData: DialogItemType[];
    messagesData: DialogMessageType[];
}
type DialogMessageType = {
    message: string;
    id:number
}
type DialogItemType = {
    name: string;
    id: number;
}
type PostType = {
    id: number;
    message: string;
    likesCount: number;
}

let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: `It's my first post`, likesCount: 20}
        ],
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Nastya'},
            {id: 3, name: 'Sasha'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are u?'},
            {id: 3, message: 'Fine, thx'},
        ],
    }
 }

 export default state;
