import img from "../assets/chef_.png"

export default function Header() {
    return (
        <header>
            <img src={img}/>
            <span>Chef Claude</span>
        </header>
    )
}