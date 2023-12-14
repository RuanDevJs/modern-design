import { stripe } from "@/lib/stripe";
import { GetServerSideProps, Metadata } from "next";

import Image from "next/image";
import Stripe from "stripe";

import * as Styled from "@/styles/product";

import { Star, Truck } from "phosphor-react";
import { theme } from "@/design";

import Coach from "@/assets/products/Sofá Retrátil Rios.png";
import axios from "@/lib/axios";
import Head from "next/head";

interface IProduct {
  product: {
    id: string;
    name: string;
    description: string;
    image: string;
    price: string;
    priceId: string;
  };
}

interface Response {
  checkoutUrl: string;
}

export default function Product({ product }: IProduct) {
  async function handleClick() {
    const response = await axios.post<Response>("/api/checkout", {
      priceId: product.priceId,
    });

    if (response.status === 201) {
      window.location.href = response.data.checkoutUrl;
    }
  }

  return (
    <>
      <Head>
        <title>Modern Design | {product.name}</title>
      </Head>
      <Styled.Container className="container">
        <div className="product-image">
          <Image
            src={Coach}
            alt={product.name}
            title={product.name}
            draggable={false}
            objectFit="cover"
          />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <div className="stars">
            <Star
              weight="fill"
              color={theme.colors.carnation.value}
              size={32}
            />
            <Star
              weight="fill"
              color={theme.colors.carnation.value}
              size={32}
            />
            <Star
              weight="fill"
              color={theme.colors.carnation.value}
              size={32}
            />
            <Star
              weight="fill"
              color={theme.colors.carnation.value}
              size={32}
            />
            <Star weight="fill" color={"#c2c2c2"} size={32} />
          </div>

          <div className="cep-form">
            <div className="cep-form-label">
              <Truck size={32} color={theme.colors.gun_powder.value} />
              <label htmlFor="cep">Type here your ZIP Code</label>
            </div>
            <div className="calculate-form">
              <input
                type="text"
                name="cep"
                id="cep"
                placeholder="17566"
                maxLength={5}
              />
              <button>Calculate</button>
            </div>
          </div>
          <button onClick={handleClick}>Comprar</button>
        </div>
      </Styled.Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  const productId = params?.id;

  if (!productId || productId === undefined) {
    return {
      redirect: "/",
      props: {},
    };
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price", "default_price.product"],
  });
  const defaultPrice = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        description: product.description,
        image: product.images[0],
        name: product.name,
        price: (defaultPrice.unit_amount! / 100).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        }),
        priceId: defaultPrice.id,
      },
    },
  };
};
