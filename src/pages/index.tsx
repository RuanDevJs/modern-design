import {
  EnvelopeSimple,
  MagnifyingGlass,
  MapPin,
  Phone,
  Plus,
  Star,
} from "phosphor-react";

import Image from "next/image";
import Poltrona from "@/assets/ad/AD.svg";

import * as Styled from "@/styles/home";
import { GetServerSideProps, Metadata } from "next";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import { theme } from "@/design";
import axios from "@/lib/axios";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Chair from "@/assets/categorys/Chairs.jpg";
import Couch from "@/assets/categorys/couch.jpg";

import Post1 from "@/assets/blog/post-1.webp";
import Post2 from "@/assets/blog/post-2.webp";
import Post3 from "@/assets/blog/post-3.webp";
import Post4 from "@/assets/blog/post-4.webp";
import Post5 from "@/assets/blog/post-5.webp";
import Post6 from "@/assets/blog/post-6.webp";
import Link from "next/link";
import Head from "next/head";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  priceId: string;
}

interface Props {
  products: Product[];
}

interface IResponse {
  checkoutUrl: string;
}

const metadata: Metadata = {
  title: "Modern Design",
  description: "Os melhores produtos da sua região",
};

export default function Home({ products }: Props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  async function handleCheckout(priceId: string) {
    const checkoutUrl = await axios.post<IResponse>("/api/checkout", {
      priceId: priceId,
    });

    if (checkoutUrl.status === 201) {
      window.location.href = checkoutUrl.data.checkoutUrl;
    }
  }

  return (
    <>
      <Head>
        <title>Modern Design </title>
      </Head>
      <Styled.Container className="container">
        <Styled.Intro>
          <Styled.Left>
            <h1>
              Find your <br /> Best Furniture
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the {"industry's"} standard dummy
              text ever since the 1500s
            </p>
            <div className="form-search">
              <div className="input">
                <MagnifyingGlass size={32} />
                <input type="text" placeholder="Search" />
              </div>
              <button>Search</button>
            </div>
          </Styled.Left>
          <Styled.Right>
            <div className="right-img">
              <Image
                src={Poltrona}
                alt="Poltrona Grayce"
                width={460}
                height={320}
                draggable={false}
              />
            </div>
            <div className="announcement">
              <Image
                src={products[0].image}
                alt={products[0].name}
                width={80}
                height={50}
              />
              <div className="info">
                <h2>{products[0].name}</h2>
                <div className="stars">
                  <Star weight="fill" color={theme.colors.carnation.value} />
                  <Star weight="fill" color={theme.colors.carnation.value} />
                  <Star weight="fill" color={theme.colors.carnation.value} />
                  <Star weight="fill" color={theme.colors.carnation.value} />
                  <Star weight="fill" color={"#c2c2c2"} />
                </div>
                <span>{products[0].price}</span>
                <button>
                  <Plus color="#fff" size={22} />
                </button>
              </div>
            </div>
          </Styled.Right>
        </Styled.Intro>
        <Styled.ProductsSection id="products">
          <h1>Best Selling Products</h1>
          <div className="products keen-slider" ref={sliderRef}>
            {products.map((product) => {
              return (
                <div key={product.id} className="product keen-slider__slide">
                  <div className="product-img">
                    <Link href={`/product/${product.id}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={250}
                        height={150}
                        draggable={false}
                      />
                    </Link>
                  </div>
                  <h2>{product.name}</h2>
                  <div className="stars">
                    <Star weight="fill" color={theme.colors.carnation.value} />
                    <Star weight="fill" color={theme.colors.carnation.value} />
                    <Star weight="fill" color={theme.colors.carnation.value} />
                    <Star weight="fill" color={theme.colors.carnation.value} />
                    <Star weight="fill" color={"#c2c2c2"} />
                  </div>
                  <span>{product.price}</span>

                  <button onClick={() => handleCheckout(product.priceId)}>
                    Comprar
                  </button>
                </div>
              );
            })}
          </div>
        </Styled.ProductsSection>
        <Styled.CategorySection id="shop">
          <h1>Our category</h1>
          <div className="category-container">
            <div className="category-overlay">
              <Image src={Chair} alt="Cadeiras" />
              <div className="overlay">
                <h1>Chair</h1>
              </div>
            </div>
            <div className="category-overlay">
              <Image src={Couch} alt="Sofás" />
              <div className="overlay">
                <h1>Couch</h1>
              </div>
            </div>
          </div>
        </Styled.CategorySection>
        <Styled.BlogSection id="blog">
          <h1>Our blog posts</h1>
          <div className="blog-container">
            <div className="post">
              <Image src={Post3} alt={products[0].name} draggable={false} />
              <div className="post-overlay">
                <h2>The best couch for your build</h2>
                <button>Read more</button>
              </div>
            </div>
            <div className="post">
              <Image src={Post2} alt={products[0].name} draggable={false} />
              <div className="post-overlay">
                <h2>
                  Why you should <br /> buy a new couch ?
                </h2>
                <button>Read more</button>
              </div>
            </div>
            <div className="post">
              <Image src={Post1} alt={products[0].name} draggable={false} />
              <div className="post-overlay">
                <h2>The best chair for your house</h2>
                <button>Read more</button>
              </div>
            </div>
            <div className="post">
              <Image src={Post4} alt={products[0].name} draggable={false} />
              <div className="post-overlay">
                <h2>Top 5 chais to your backyard</h2>
                <button>Read more</button>
              </div>
            </div>
            <div className="post">
              <Image src={Post5} alt={products[0].name} draggable={false} />
              <div className="post-overlay">
                <h2>Top 5 chais to your kitchen</h2>
                <button>Read more</button>
              </div>
            </div>
            <div className="post">
              <Image src={Post6} alt={products[0].name} draggable={false} />
              <div className="post-overlay">
                <h2>
                  A new chair <br /> coming this summer!
                </h2>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </Styled.BlogSection>
        <Styled.ContactSection id="contact">
          <h1>Contact</h1>
          <Styled.ContactContainer>
            <Styled.ContactAddress>
              <h2 className="contact-address-title">E-commerce</h2>
              <ul className="address-list">
                <li>
                  <span>
                    <MapPin size={22} weight="fill" /> 8 Miles Street
                  </span>
                </li>
                <li>
                  <span>Belo Horizonte - Brazil</span>
                </li>
                <li>
                  <span>Brazil - MG State - Planet Earth</span>
                </li>
              </ul>

              <ul className="address-list">
                <li>
                  <span>
                    <EnvelopeSimple size={22} weight="fill" />{" "}
                    contact@moderndesign.com
                  </span>
                </li>
                <li>
                  <span>warranty@moderndesign.com</span>
                </li>
              </ul>

              <ul className="address-list">
                <li>
                  <span>
                    <Phone size={22} weight="fill" /> +55 21 9999-9999
                  </span>
                </li>
              </ul>
            </Styled.ContactAddress>
            <Styled.ContactForm>
              <div>
                <div className="label">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Type your name" />
                </div>
                <div className="label">
                  <label htmlFor="phone">Phone</label>
                  <input type="text" placeholder="Type your phone number" />
                </div>
              </div>
              <div className="label">
                <label htmlFor="email">E-mail</label>
                <input type="email" placeholder="Type your email" />
              </div>
              <div className="label">
                <label htmlFor="message">Message</label>
                <textarea
                  placeholder="How we could help you ?"
                  maxLength={574}
                />
              </div>
              <button>Send Message</button>
            </Styled.ContactForm>
          </Styled.ContactContainer>
        </Styled.ContactSection>
      </Styled.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await (
    await stripe.products.list({
      expand: ["data.default_price"],
    })
  ).data;

  const products: Product[] = response.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      description: product.description || "",
      image: product.images[0],
      price: (price.unit_amount! / 100).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      }),
      priceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
  };
};
