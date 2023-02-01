import React, { useState } from 'react'
import beach from './assets/beach.jpeg'
import './App.css'

function getActiveClassName (activeArticle, currentArticle) {
  if (activeArticle ===  currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
      <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
        <h1>About Me</h1>
        <p>Fredrik är en frilansande front-end utvecklare med över 10 års erfarenhet av JavaScript och JavaScript-ramverk. Han har tidigare jobbat med bland annat Apple, Google och Sony. Fredrik har tidigare föreläst om webb-programmering för högskolestudenter och hållit i presentationer för olika user groups. Fredrik älskar att testa nya ramverk och bibliotek men har sedan lång tid tillbaka haft React som favorit.</p>
        <img className='beach' src={beach} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis sagittis dignissim ornare ut tellus. Mauris et accumsan elit. Fusce scelerisque leo a erat tristique, in ornare mauris mollis. Donec hendrerit turpis eleifend vulputate eleifend. Maecenas pretium quis purus vitae luctus.</p>
      </article>
      <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
          <h1>Idea</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis sagittis dignissim ornare ut tellus. Mauris et accumsan elit. Fusce scelerisque leo a erat tristique, in ornare mauris mollis. Donec hendrerit turpis eleifend vulputate eleifend. Maecenas pretium quis purus vitae luctus.</p>
        <img className='beach' src={beach} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nunc, lacinia non sollicitudin ut, congue lobortis nibh. Vivamus interdum elit ac consequat luctus. Etiam a turpis in turpis sagittis dignissim ornare ut tellus. Mauris et accumsan elit. Fusce scelerisque leo a erat tristique, in ornare mauris mollis. Donec hendrerit turpis eleifend vulputate eleifend. Maecenas pretium quis purus vitae luctus.</p>
      </article>
      <div className='article'>
        <button onClick={() => {
          setActiveArticle((a) => {
            if (a === 'First Article') {
              return '2nd Article'
            } else {
              return 'First Article'
            }
          })
        }}>Switch Article</button>
      </div>
    </>
  )
}

export default App
