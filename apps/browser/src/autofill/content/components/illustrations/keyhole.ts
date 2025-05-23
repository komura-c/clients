import { html } from "lit";

import { ThemeTypes } from "@bitwarden/common/platform/enums";

import { IconProps } from "../common-types";

// This icon has static multi-colors for each theme
export function Keyhole({ theme }: IconProps) {
  if (theme === ThemeTypes.Dark) {
    return html`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
        <path
          fill="#79A1E9"
          fill-rule="evenodd"
          d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
          clip-rule="evenodd"
        />
        <path
          fill="#79A1E9"
          d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
        />
        <path fill="#F3F6F9" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          clip-rule="evenodd"
        />
        <path
          fill="#F3F6F9"
          d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
          clip-rule="evenodd"
        />
        <path
          fill="#AAC3EF"
          fill-rule="evenodd"
          d="M67.604 76H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.769-2H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M29.628 60c1.134 1.034 1.719 2.571 1.387 4.083L28.835 74H50a8 8 0 1 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 1 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.633l-2.637-12Zm1.608-2H48a8 8 0 0 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.996.996 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.195 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 1 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 0 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 1 0-.623-1.901l-1.312.43v-1.4Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
          clip-rule="evenodd"
        />
        <path
          fill="#FFBF00"
          d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
          clip-rule="evenodd"
        />
        <path
          fill="#175DDC"
          fill-rule="evenodd"
          d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
          clip-rule="evenodd"
        />
      </svg>
    `;
  }

  return html`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none">
      <path
        fill="#99BAF4"
        fill-rule="evenodd"
        d="M64.985 64.083c-.363-1.654.37-3.337 1.72-4.36C74.175 54.063 79 45.095 79 35 79 17.88 65.12 4 48 4 30.88 4 17 17.88 17 35c0 10.095 4.825 19.063 12.295 24.723 1.35 1.023 2.083 2.706 1.72 4.36l-5.947 27.058A4 4 0 0 0 28.975 96h38.05a4 4 0 0 0 3.907-4.859l-5.947-27.058Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M20.864 50H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M22.07 48H46a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2H20c-.051 0-.102.002-.151.006A29.072 29.072 0 0 0 19 35c0 4.678 1.106 9.092 3.07 13Zm-1.206 2H46a4 4 0 0 0 4-4V30a4 4 0 0 0-4-4H20c-.647 0-1.258.154-1.8.427C17.42 29.149 17 32.026 17 35a30.86 30.86 0 0 0 3.864 15Z"
        clip-rule="evenodd"
      />
      <path
        fill="#99BAF4"
        d="M18 31h30v4H18v-4ZM21 44a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM29 44a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1Z"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M78.954 33.303A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M76.99 34.262A1.987 1.987 0 0 0 76 34H50a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h19.91a28.88 28.88 0 0 0 7.08-19.738Zm1.964-.959A3.99 3.99 0 0 0 76 32H50a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h20.804A30.889 30.889 0 0 0 79 35a31.5 31.5 0 0 0-.046-1.697Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        d="M66 39a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1ZM66 43a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
      />
      <path fill="#fff" d="M62 40a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M58 42a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        d="M65.391 48.269c.402 1.035.609 1.86.609 2.981a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75c0-1.12.207-1.946.609-2.981a8.593 8.593 0 0 1 1.734-2.77 7.987 7.987 0 0 1 2.595-1.85C55.91 43.222 56.95 43 58 43c1.05 0 2.09.22 3.062.65a7.987 7.987 0 0 1 2.595 1.85 8.593 8.593 0 0 1 1.734 2.769Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M52.343 45.5a8.593 8.593 0 0 0-1.734 2.769c-.402 1.035-.609 1.86-.609 2.981 0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-1.12-.207-1.946-.609-2.981a8.593 8.593 0 0 0-1.734-2.77 7.987 7.987 0 0 0-2.595-1.85A7.569 7.569 0 0 0 58 43c-1.05 0-2.09.22-3.062.65a7.987 7.987 0 0 0-2.595 1.85ZM63.857 50a8.12 8.12 0 0 0-.33-1.008 6.593 6.593 0 0 0-1.33-2.124l1.414-1.326-1.413 1.325a5.986 5.986 0 0 0-1.945-1.388A5.568 5.568 0 0 0 58 45c-.77 0-1.535.161-2.253.479a5.986 5.986 0 0 0-1.945 1.389 6.593 6.593 0 0 0-1.329 2.124 8.12 8.12 0 0 0-.33 1.008h11.714Z"
        clip-rule="evenodd"
      />
      <path
        fill="#DBE5F6"
        fill-rule="evenodd"
        d="M67.605 76H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Zm-38.77-2H50a8 8 0 0 0 0-16H27.215a31.14 31.14 0 0 0 2.08 1.723c1.35 1.023 2.083 2.706 1.72 4.36L28.835 74Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M29.628 60c1.134 1.034 1.72 2.571 1.387 4.083L28.835 74H50a8 8 0 0 0 0-16H27.215a31.117 31.117 0 0 0 2.08 1.723c.116.088.227.18.333.277Zm2.562 0c.792 1.307 1.134 2.894.778 4.513L31.322 72H50a6 6 0 0 0 0-12H32.19Zm33.806 18H48a6 6 0 0 0 0 12h20.634l-2.638-12Zm1.609-2H48a8 8 0 1 0 0 16h23.027c0-.282-.031-.57-.095-.859L67.604 76Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="m69.06 82.627-1.056.346v-1.4a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.832 1.167a1 1 0 1 0 1.627 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167.883-.29-.431-1.962ZM29.819 69.526a.995.995 0 0 0 .376-.318l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4a1 1 0 0 0-.95-.999c.08.493.072 1.002-.04 1.51l-1.196 5.442Zm11.186-5.953a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm0 18a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Zm9 0a1 1 0 1 0-2 0v1.4l-1.312-.43a1 1 0 0 0-.623 1.9l1.33.436-.833 1.167a1 1 0 1 0 1.628 1.162l.81-1.135.81 1.135a1 1 0 0 0 1.628-1.162l-.833-1.167 1.33-.435a1 1 0 0 0-.623-1.901l-1.312.43v-1.4Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M65.497 58.13C72.489 52.83 77 44.441 77 35 77 18.984 64.016 6 48 6S19 18.984 19 35c0 9.443 4.51 17.83 11.503 23.13 1.888 1.43 3.017 3.869 2.465 6.383L27.021 91.57A2 2 0 0 0 28.975 94h38.05a2 2 0 0 0 1.954-2.43l-5.947-27.057c-.552-2.514.577-4.954 2.465-6.384Zm1.208 1.593c-1.35 1.023-2.083 2.706-1.72 4.36l5.947 27.058A4 4 0 0 1 67.025 96h-38.05a4 4 0 0 1-3.907-4.859l5.947-27.058c.363-1.654-.37-3.337-1.72-4.36C21.825 54.063 17 45.095 17 35 17 17.88 30.88 4 48 4c17.12 0 31 13.88 31 31 0 10.095-4.825 19.063-12.295 24.723Z"
        clip-rule="evenodd"
      />
      <path
        fill="#FFBF00"
        d="M60 12c0 6.627-5.373 12-12 12s-12-5.373-12-12S41.373 0 48 0s12 5.373 12 12Z"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M48 22c5.523 0 10-4.477 10-10S53.523 2 48 2 38 6.477 38 12s4.477 10 10 10Zm0 2c6.627 0 12-5.373 12-12S54.627 0 48 0 36 5.373 36 12s5.373 12 12 12Z"
        clip-rule="evenodd"
      />
      <path
        fill="#0E3781"
        fill-rule="evenodd"
        d="M53.707 8.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L46 14.586l6.293-6.293a1 1 0 0 1 1.414 0Z"
        clip-rule="evenodd"
      />
    </svg>
  `;
}
