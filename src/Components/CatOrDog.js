import CallingCard from "../Subcomponents/CallingCard"

export default function CatOrDog(props) {
    console.log(props);
    if (props.isCallingCard) {
        return <CallingCard itemName="Cat Or Dog?" url="https://unsplash.com/photos/a-dog-and-a-cat-laying-in-the-grass-ouo1hbizWwo" imgSrc="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35" description="Is it a cat or a dog?" />

    }

    return (
        <>
            <h1>Cat or Dog?</h1>
            <p>Is this a cat or a dog?</p>
        </>
    )
}