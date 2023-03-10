import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/about-img.svg'

const AboutPage = () => {
  return (
  <main>
    <PageHero title="about" />
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde excepturi neque obcaecati facere reiciendis, dolorum, aspernatur sed eveniet blanditiis suscipit laboriosam, ipsa est? Exercitationem iste suscipit consequatur. Excepturi libero consectetur nobis sit distinctio officiis, aspernatur sapiente rem sed tempora illo ad beatae tempore commodi cumque accusantium quas officia impedit eveniet.       
          </p>
        </div>
      </article>

    </Wrapper>

  </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
