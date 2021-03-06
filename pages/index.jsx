import Head from 'next/head';
import {useState, useEffect} from 'react';

export default function Home() {

  const [menu, setMenu] = useState(false);

  const handleScroll = () =>{
    if(window.scrollY !== 0){
      setMenu(false);
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  },[])
    
  return (
    <div>
      <Head>
        <title>Web Coffee</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="header">
            <section className="flex">

                <a href="#home" className="logo"><img src="images/logo.png" alt="" /></a>
        
                <nav className={menu? 'navbar active': 'navbar'}>
                    <a href="#home" onClick={()=>setMenu(false)}>Home</a>
                    <a href="#about" onClick={()=>setMenu(false)}>About</a>
                    <a href="#menu" onClick={()=>setMenu(false)}>Menu</a>
                    <a href="#gallery" onClick={()=>setMenu(false)}>Gallery</a>
                    <a href="#team" onClick={()=>setMenu(false)}>Team</a>
                    <a href="#contact" onClick={()=>setMenu(false)}>Contact</a>
                </nav>
        
                <div id="menu-btn" onClick={()=>setMenu(!menu)} className={menu? 'fas fa-times' : 'fas fa-bars'}></div>

            </section>
        </div>


        <div className="home-bg">

          <section className="home" id="home">
              <div className="content">
                  <h3>coffee heaven</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque suscipit nobis dolore unde perferendis a quia exercitationem eum cum.</p>
                  <a href="#about" className="btn">about us</a>
              </div>
          </section>

        </div>

        <section className="about" id="about">

            <div className="image">
              <img src="images/about-img.svg" alt="" />
            </div>
        
            <div className="content">
              <h3>A cup of coffee can complete your day</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam suscipit sunt repellendus, dolorum recusandae placeat quae. Iste eaque aspernatur, animi deleniti voluptas, sunt molestias eveniet sint consectetur facere a ex.</p>
              <a href="#menu" className="btn">our menu</a>
            </div>
        
        </section>


        <section className="facility">

            <div className="heading">
              <img src="images/heading-img.png" alt=""/>
              <h3>our facility</h3>
            </div>
        
            <div className="box-container">
        
              <div className="box">
                  <img src="images/icon-1.png" alt=""/>
                  <h3>varieties of coffees</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci!</p>
              </div>
        
              <div className="box">
                  <img src="images/icon-2.png" alt=""/>
                  <h3>coffee beans</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci!</p>
              </div>
        
              <div className="box">
                  <img src="images/icon-3.png" alt=""/>
                  <h3>breakfast and sweets</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci!</p>
              </div>
        
              <div className="box">
                  <img src="images/icon-4.png" alt=""/>
                  <h3>read to go coffee</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci!</p>
              </div>
        
            </div>
        
        </section>



        <section className="menu" id="menu">

            <div className="heading">
              <img src="images/heading-img.png" alt=""/>
              <h3>popular menu</h3>
            </div>
        
            <div className="box-container">
        
              <div className="box">
                  <img src="images/menu-1.png" alt=""/>
                  <h3>love you coffee</h3>
              </div>
        
              <div className="box">
                  <img src="images/menu-2.png" alt=""/>
                  <h3>Cappuccino</h3>
              </div>
        
              <div className="box">
                  <img src="images/menu-3.png" alt=""/>
                  <h3>Mocha coffee</h3>
              </div>
        
              <div className="box">
                  <img src="images/menu-4.png" alt=""/>
                  <h3>Frappuccino</h3>
              </div>
        
              <div className="box">
                  <img src="images/menu-5.png" alt=""/>
                  <h3>black coffee</h3>
              </div>
        
              <div className="box">
                  <img src="images/menu-6.png" alt=""/>
                  <h3>love heart coffee</h3>
              </div>
        
            </div>
        
        </section>


        <section className="gallery" id="gallery">

            <div className="heading">
              <img src="images/heading-img.png" alt="" />
              <h3>our gallery</h3>
            </div>
        
            <div className="box-container">
              <img src="images/gallery-1.webp" alt=""/>
              <img src="images/gallery-2.webp" alt=""/>
              <img src="images/gallery-3.webp" alt=""/>
              <img src="images/gallery-4.webp" alt=""/>
              <img src="images/gallery-5.webp" alt=""/>
              <img src="images/gallery-6.webp" alt=""/>
            </div>
        
        </section>


        <section className="team" id="team">

            <div className="heading">
              <img src="images/heading-img.png" alt=""/>
              <h3>our team</h3>
            </div>
        
            <div className="box-container">
        
              <div className="box">
                  <img src="images/our-team-1.jpg" alt=""/>
                  <h3>john deo</h3>
              </div>
              <div className="box">
                  <img src="images/our-team-2.jpg" alt=""/>
                  <h3>john deo</h3>
              </div>
              <div className="box">
                  <img src="images/our-team-3.jpg" alt=""/>
                  <h3>john deo</h3>
              </div>
              <div className="box">
                  <img src="images/our-team-4.jpg" alt=""/>
                  <h3>john deo</h3>
              </div>
              <div className="box">
                  <img src="images/our-team-5.jpg" alt=""/>
                  <h3>john deo</h3>
              </div>
              <div className="box">
                  <img src="images/our-team-6.jpg" alt=""/>
                  <h3>john deo</h3>
              </div>
        
            </div>
        
        </section>

        <section className="contact" id="contact">

            <div className="heading">
              <img src="images/heading-img.png" alt=""/>
              <h3>contact us</h3>
            </div>
        
            <div className="row">
        
              <div className="image">
                  <img src="images/contact-img.svg" alt=""/>
              </div>
        
              <form action="" method="post">
                  <h3>book a table</h3>
                  <input type="text" name="name" required className="box" maxlength="20" placeholder="enter your name"/>
                  <input type="number" name="number" required className="box" maxlength="20" placeholder="enter your number" min="0" max="9999999999" onkeypress="if(this.value.length == 10) return false"/>
                  <input type="number" name="guests" required className="box" maxlength="20" placeholder="how many guests" min="0" max="99" onkeypress="if(this.value.length == 2) return false"/>
                  <input type="submit" name="send" value="send message" className="btn"/>
              </form>
        
            </div>
        
        </section>


        <section className="footer">

            <div className="box-container">
        
              <div className="box">
                  <i className="fas fa-envelope"></i>
                  <h3>our email</h3>
                  <p>kenffysoft@gmail.com</p>
              </div>
        
              <div className="box">
                  <i className="fas fa-clock"></i>
                  <h3>opening hours</h3>
                  <p>07:00am to 09:00pm</p>
              </div>
        
              <div className="box">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3>shop location</h3>
                  <p>stuttgart, germany</p>
              </div>
        
              <div className="box">
                  <i className="fas fa-phone"></i>
                  <h3>our number</h3>
                  <p>+49-456-7890</p>
              </div>
        
            </div>
        
            <div className="credit"> &copy; copyright @ 2022 by <span>kenffysoft</span> | all rights reserved! </div>
        
        </section>
      </main>

      
    </div>
  )
}
