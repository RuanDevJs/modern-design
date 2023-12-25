import { stripe } from "@/lib/stripe";
import { GetServerSideProps } from "next";

import Image from "next/image";
import React from "react";

import * as Styled from "@/styles/shopping-cart";
import Stripe from "stripe";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  priceId: string;
}

interface Props {
  products: Product[];
}

export default function ShoppingCart({ products }: Props) {
  const totalPrice = products.reduce((acc, product) => {
    acc += product.price;
    return acc;
  }, 0);

  function formatPrice(price: number) {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <Styled.Container className="container">
      <div className="title">
        <h1>Shopping Cart</h1>
      </div>
      <Styled.Grid>
        <div>
          {products.map((product, index) => {
            return (
              <Styled.Product key={product.id}>
                <Styled.Image>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={100}
                    draggable={false}
                  />
                </Styled.Image>
                <Styled.Info>
                  <div className="info-heading">
                    <h2>{product.name}</h2>
                    <span>{formatPrice(product.price)}</span>
                  </div>
                  <p>{product.description}</p>
                  <div className="info-footer">
                    <select>
                      <option value="1" label="1" selected />
                      <option value="2" label="2" />
                      <option value="3" label="3" />
                      <option value="4" label="4" />
                    </select>
                    <span>Excluir</span>
                    <span>Salvar</span>
                  </div>
                </Styled.Info>
              </Styled.Product>
            );
          })}
        </div>
        <Styled.Order>
          <div className="order-heading">
            <h2>Subtotal ({products.length} pedidos):</h2>
            <span>{formatPrice(totalPrice)} </span>
          </div>
          <button>Fechar pedido</button>
        </Styled.Order>
      </Styled.Grid>
    </Styled.Container>
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
      price: price.unit_amount! / 100,
      priceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
  };
};
