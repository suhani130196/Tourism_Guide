import image from "../assets/aboutimage.avif"
import '../components/about.css'

export default function About (){
    return(
       <div>
        <img src={image} alt="image here" className="coverImage"/>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora earum quibusdam quam, illum dicta similique aut labore odio. Delectus, inventore.</h1>
       </div> 
    )
}