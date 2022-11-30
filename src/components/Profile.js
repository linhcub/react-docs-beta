import './Profile.css'

const user = {
    name: 'Lionel Messi',
    imageUrl: 'https://i.guim.co.uk/img/media/d5005bc5b7bed47c8ec60d068ac87e39f8bad313/0_0_2560_1536/master/2560.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=eb1d21ed68cb8ae3f009229625b8845e',
    imageSize: 200,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}
