import Image from "next/image";
import { FinnTheHuman, Heart, ShoppingCart } from "phosphor-react";

import Logo from "@/assets/logo/Logo.svg";
import { useRef } from "react";

import * as Styled from "@/styles/header";
import { Metadata } from "next";
import Link from "next/link";

export default function Header() {
  const navigationRef = useRef<HTMLUListElement>(null);

  function handleClick(event: React.MouseEvent) {
    if (navigationRef && navigationRef.current !== null) {
      event.preventDefault();

      const href = event.currentTarget
        .getAttribute("href")
        ?.replace("#", "") as string;

      const distanceTop = document.getElementById(href)?.offsetTop;

      if (distanceTop !== undefined) {
        scrollTo({
          top: distanceTop,
          behavior: "smooth",
        });
      }
    }
  }

  return (
    <Styled.Container className="container">
      <div className="heading-img">
        <Link href="/">
          <Image
            src={Logo}
            alt="Modern Design"
            width={120}
            height={160}
            draggable={false}
          />
        </Link>
      </div>
      <Styled.Navigation>
        <ul
          className="navigation-menu"
          ref={navigationRef}
          onClick={handleClick}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#shop" onClick={(event) => handleClick(event)}>
              Shop
            </a>
          </li>
          <li>
            <a href="#products" onClick={(event) => handleClick(event)}>
              Products
            </a>
          </li>
          <li>
            <a href="#blog" onClick={(event) => handleClick(event)}>
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(event) => handleClick(event)}>
              Contact
            </a>
          </li>
        </ul>
      </Styled.Navigation>
      <Styled.Menu className="menu">
        <ul>
          <li>
            <a href="#">
              <ShoppingCart size={24} />
            </a>
          </li>
          <li>
            <Link href="/favorite">
              <Heart size={24} />
            </Link>
          </li>
          <li>
            <Link href="/login">
              <FinnTheHuman size={24} />
            </Link>
          </li>
        </ul>
      </Styled.Menu>
    </Styled.Container>
  );
}
