import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  padding-bottom: 5rem;

  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image {
    img {
      max-width: 500px;
    }
  }

  @media (max-width: 1366px) {
    display: block;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: block;
      margin: 16rem 0 16rem 0;
      text-align: center;
    }

    .hero-image img {
      max-width: 100%;
    }
  }

  @media (max-width: 1024px) {
    display: block;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: block;
      margin: 16rem 0 16rem 0;
    }

    .hero-image img {
      max-width: 100%;
    }
  }

  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: block;
      margin-top: 10rem;
    }

    .hero-image img {
      max-width: 100%;
    }
  }

  @media (max-width: 600px) {
    margin-top: 25%;
  }
  @media (max-width: 480px) {
    margin-top: 35%;
  }
`;