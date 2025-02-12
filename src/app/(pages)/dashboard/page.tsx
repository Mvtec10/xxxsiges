"use client";

import "@/styles/private.css";
import '@/styles/globals.css';
import '@/styles/dashboard.css';
import  { useEffect} from 'react';
import { useState } from "react";
import {useRouter} from 'next/navigation';
import Image from "next/image";
import {Link} from "@heroui/react";

import logo from '@/assets/imgs/Logo.svg';

export default function Dashbaord(){

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const buttons = document.querySelectorAll(
      ".btn[data-active]",
    ) as NodeListOf<HTMLButtonElement>;
    const item_list = document.querySelectorAll(
      ".btn",
    ) as NodeListOf<HTMLButtonElement>;
    const shadow = document.querySelector(".shadow") as HTMLDivElement;

    for (const item of item_list) {
      if (item.dataset.active === "true") {
        shadow.style.transition = ".5s";
        shadow.style.transform = `translate(${
          item.getBoundingClientRect().x + 7
        }px, ${item.getBoundingClientRect().y + 18}px)`;
        shadow.style.height = `${item.getBoundingClientRect().height - 35}px`;
      }
    }

    for (const button of buttons) {
      button.addEventListener("mouseover", () => {
        shadow.style.transform = `translate(${
          button.getBoundingClientRect().x + 7
        }px, ${button.getBoundingClientRect().y + 18}px)`;
        shadow.style.height = `${button.getBoundingClientRect().height - 35}px`;
      });
    }

    for (const button of buttons) {
      button.addEventListener("mouseleave", () => {
        for (const item of item_list) {
          if (item.dataset.active === "true") {
            shadow.style.transition = ".5s";
            shadow.style.transform = `translate(${
              item.getBoundingClientRect().x + 7
            }px, ${item.getBoundingClientRect().y + 18}px)`;
            shadow.style.height = `${
              item.getBoundingClientRect().height - 35
            }px`;
          }
        }
      });
    }
  }, []);

   return (
    <main className="privateMainContainer">
      <div className="shadow" />
      <nav className="privateNavbar">
        <div className="center">
             <Image className="center" src={logo} height={200}></Image>
        </div>
        
          <ul className="navlist">
          <li>
            <button
              className="btn"
              data-active="true"
              data-page="Dashboard"
              type="button"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              className="btn"
              data-active="false"
              data-page="Consultas"
              type="button"
            >
              Seguros
            </button>
          </li>
          <li>
            <button
              className="btn"
              data-active="false"
              data-page="Pagamentos"
              type="button"
            >
              Segurados
            </button>
          </li>
          <li>
            <button
              className="btn"
              data-active="false"
              data-page="Transferências"
              type="button"
            >
              Apólices
            </button>
          </li>
          
          <div className="separator" />
          <li>
            <button
              className="btn"
              data-active="false"
              data-page="Agências"
              type="button"
            >
              Conta
            </button>
          </li>
          <li>
            <button
              className="btn"
              data-active="false"
              data-page="Suporte"
              type="button"
            >
              Suporte
            </button>
          </li>
          <li>
            <button
              className="btn"
              data-active="false"
              data-page="Suporte"
              type="button"
            >
              Configurações
            </button>
          </li>
        </ul>
        <div className="account">
          <div className="separator" />
          <div className="accountCard">
            <button type="button">
            Sair
            </button>
          </div>
        </div>
      </nav>
      <header className="privateHeader">
               <p>Internet Banking</p>
        </header>
      <section className="privateChildrenContainer">
         <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, porro animi reprehenderit deserunt ea vel veniam excepturi fugit illo explicabo quae? Numquam, saepe excepturi. Atque dignissimos odit tenetur sequi, maxime enim autem amet natus commodi porro illum fugit, blanditiis, harum rem temporibus qui nemo! Ratione vel consectetur illum. Architecto sequi, illum incidunt sint ut hic ipsum impedit quisquam molestias eligendi obcaecati commodi, voluptates distinctio sed, magnam aliquid. Sit, nesciunt ad officia delectus distinctio cupiditate aliquid beatae consectetur quisquam quibusdam repudiandae dolore ratione provident veritatis odit alias veniam quod! Soluta, id eum? Veritatis, modi fugiat corporis, enim, possimus quaerat nulla architecto inventore repellat nobis suscipit iste minima consectetur? Asperiores quod cumque ea sint, quidem sed quaerat, esse odit repellat quas modi nesciunt totam quo a explicabo vero ducimus, accusantium fugiat velit ipsum veniam quam? Illum esse labore et cum eos veritatis dicta nesciunt, optio commodi, omnis suscipit asperiores. Quae consectetur, ad dignissimos alias blanditiis accusantium. Aliquid soluta, id repudiandae in, inventore perspiciatis et asperiores culpa ut tempora eum cumque possimus rem error minus! Quasi, possimus consequuntur! Vero minus, esse, iusto nam, deleniti saepe exercitationem officiis reprehenderit ad totam temporibus sunt atque ullam iste quaerat sit maxime corporis. Quia ipsum voluptate incidunt?</p>

         <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, porro animi reprehenderit deserunt ea vel veniam excepturi fugit illo explicabo quae? Numquam, saepe excepturi. Atque dignissimos odit tenetur sequi, maxime enim autem amet natus commodi porro illum fugit, blanditiis, harum rem temporibus qui nemo! Ratione vel consectetur illum. Architecto sequi, illum incidunt sint ut hic ipsum impedit quisquam molestias eligendi obcaecati commodi, voluptates distinctio sed, magnam aliquid. Sit, nesciunt ad officia delectus distinctio cupiditate aliquid beatae consectetur quisquam quibusdam repudiandae dolore ratione provident veritatis odit alias veniam quod! Soluta, id eum? Veritatis, modi fugiat corporis, enim, possimus quaerat nulla architecto inventore repellat nobis suscipit iste minima consectetur? Asperiores quod cumque ea sint, quidem sed quaerat, esse odit repellat quas modi nesciunt totam quo a explicabo vero ducimus, accusantium fugiat velit ipsum veniam quam? Illum esse labore et cum eos veritatis dicta nesciunt, optio commodi, omnis suscipit asperiores. Quae consectetur, ad dignissimos alias blanditiis accusantium. Aliquid soluta, id repudiandae in, inventore perspiciatis et asperiores culpa ut tempora eum cumque possimus rem error minus! Quasi, possimus consequuntur! Vero minus, esse, iusto nam, deleniti saepe exercitationem officiis reprehenderit ad totam temporibus sunt atque ullam iste quaerat sit maxime corporis. Quia ipsum voluptate incidunt?</p>
      </section>
    </main>
  )
}