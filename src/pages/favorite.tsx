import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";

import Image from "next/image";
import Stripe from "stripe";

import * as Styled from "@/styles/favorite";
import { Heart } from "phosphor-react";
import Head from "next/head";
import Link from "next/link";

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

export default function Favorite({ products }: Props) {
  return (
    <>
      <Head>
        <title>Modern Design | Favorite</title>
      </Head>
      <Styled.Container className="container">
        <div className="heading">
          <h1>Favorite</h1>
        </div>
        <Styled.Grid>
          {products.map((product, index) => {
            return (
              <div className="product" key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={150}
                    draggable={false}
                  />
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="icon">
                    <Heart weight="fill" size={22} />
                  </div>
                </Link>
              </div>
            );
          })}
        </Styled.Grid>
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
