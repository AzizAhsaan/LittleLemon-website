  import React from 'react';
  import chef from "../assets/chef.png";
  import recipe1 from "../assets/recipe1.jpg";
  import recipe2 from "../assets/recipe2.jpg";
  import recipe3 from "../assets/recipe3.jpg";
  import profile1 from "../assets/profile1.jpg"
  import profile2 from "../assets/profile2.jpg"
  import profile3 from "../assets/profile3.jpg"
  import profile4 from "../assets/profile4.jpg"

  import { useNavigate } from 'react-router-dom';
  const Gallery = () => {
    const navigate =useNavigate()
    const cartpage=()=>{
      navigate("/Menu")
    }
    const Bookpage=()=>{
      navigate("/Reservation")
    }
    const peopleopinions=[
      {
        id:1,
        picture:profile1,
        job: 'Software Engineer',
        name:"John Smith",
        paragraph:"The food was absolutely delicious! Every bite was bursting with flavor and left me wanting more. A truly incredible dining experience!"
      },
      {
        id:2,
        picture:profile2,
        job: ' Marketing Manager',
        name:"Emily Johnson",
        paragraph:"I can't praise the food enough. The presentation was stunning, and the taste was out of this world. The chefs really know how to create a culinary masterpiece!"
      },
      {
        id:3,
        picture:profile3,
        job: 'Financial Analyst',
        name:"David Brown",
        paragraph:"The flavors in the food were perfectly balanced. It was a symphony of tastes that danced on my palate. This restaurant has truly elevated the art of cooking!"
      },
      {
        id:4,
        picture:profile4,
        job: 'Graphic Designer',
        name:"Sarah Davis",
        paragraph:"I'm still dreaming about the food I had last night. It was a gastronomic delight! The quality of ingredients and the attention to detail were evident in every dish."
      },
    ]
    return (
      <div className='min-h-screen'>
        <div className='flex-col justify-center'>
          <div className='h-3/6 border-b border-gray-200	 flex items-center justify-center overflow-hidden'>
            <div>
              <div className='grid grid-rows-1 grid-cols-2 h-full w-full'>
                <div>
                  <div className='mb-[1rem]'><h1 className='text-[#E8A7B4]  text-4xl text-center mt-12'>Meet Our Chef</h1></div>
                  <div className='mb-[2rem]'><p className='text-white text-lg text-left lg:mx-16 md:mx-20'>
                  Step into the culinary world of Little Lemon and let us introduce you to our extraordinary chef. With unparalleled expertise and a passion for gastronomy, our chef is the driving force behind the unforgettable dining experiences at our establishment.

  With a deep-rooted commitment to quality and innovation, our chef masterfully combines flavors, textures, and techniques to create culinary masterpieces that delight the palate. From farm-fresh ingredients to exquisite presentation, every dish is a testament to their culinary artistry.

  Drawing inspiration from both local traditions and global influences, our chef crafts a menu that reflects their creative vision and culinary expertise. Each dish tells a story, enticing guests to embark on a culinary journey like no other.

  Prepare to be enchanted by the culinary magic of our chef at Little Lemon. Immerse yourself in a world of flavors, where every bite is a symphony of taste and every dish is a testament to their culinary prowess. Join us and savor the extraordinary creations of our talented chef."                </p>
  </div>
                  <div className='flex ml-20 mb-8'>
                    <button onClick={cartpage} className='bg-[#E8A7B4] items-center w-32 h-10 rounded-tl-lg rounded-br-lg'>Menu</button>
                    <button onClick={Bookpage} className='ml-8 bg-[#FFD500] items-center w-32 h-10 rounded-tl-lg rounded-br-lg'>Book a Table</button>
                  </div>
                </div>

                <div className='lg:w-10/12 flex justify-center md:w-7/12 ml-[3rem]'>
                  <div className=' flex flex-col justify-center items-center '>
                    <h1 className='text-white text-3xl text-center'>José Andrés</h1>
                    <div className='flex justify-center items-center '>

                      <img src={chef} alt='Chef' />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        <div className='flex-col justify-center items-center mt-[3rem]'>
          <h1 className='text-center text-white text-[3rem]'>Let's hear some satisfaction</h1>
          <p className='text-white text-center text-[1rem]'>Discover What Others Love and Share Your Own Experiences!</p>
          <div className='flex justify-center content-center'>
            <div className=' lg:grid grid-cols-2 grid-rows-2 gap-[6rem]   mt-[5rem]'>
              { peopleopinions.map((people)=>(
                  <div className='h-[20rem] w-[35em]  flex justify-center overflow-hidden'>
                  <img className='rounded-full h-[19rem]' src={people.picture} />
                  <div className='flex-col ml-[2rem]'>
                    <h1 className='text-white text-[2.5rem]'>{people.name}</h1>
                    <p className='text-white text-[1.5] mt-[0.5rem]'>{people.job}</p>
          
                    <p className='text-white text-[1.2rem] mt-[2.2rem]'>{people.paragraph}</p>
                  </div>
                </div>
              ))}
          </div>
          
          </div>
        </div>
        </div>
      </div>
    );
  };

  export default Gallery;
