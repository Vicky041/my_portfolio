import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/pollyimg.jpg'
import IMG3 from '../../assets/QuizzyThumbnail.webp'
import IMG4 from '../../assets/shortly-img.png'
import IMG5 from '../../assets/Todo-List-img.webp'
import IMG6 from '../../assets/weather-forecast.webp'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Tracker App',  
    github: 'https://github.com/Vicky041/Crypto-Stock-Tracker_Dashboard',
    demo: 'https://crypto-stock-tracker-dashboard-theta.vercel.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Polling App',
    github: 'https://github.com/Vicky041/polling_app',
    demo: 'https://polling-app-s7fn.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Quizzy App',
    github: 'https://github.com/Vicky041/Terra-quiz-app',
    demo: 'https://terra-quiz-app.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Url Shortener',
    github: 'https://github.com/Vicky041/terra-shortly-app',
    demo: 'https://terra-shortly-app.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Todo List App',
    github: 'https://github.com/Vicky041/Complete-To-Do-App',
    demo: 'https://complete-to-do-app-wine.vercel.app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Weather Forecast App',
    github: 'https://github.com/Vicky041/WeatherDB',
    demo: 'https://weather-db-sepia.vercel.app/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                    <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
        
      </div>
    </section>
  )
}

export default Portfolio