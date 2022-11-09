<template>
  <div class="wrapper">
    <header class="wrapper__header">
      <h1 class="header__title">Wallet</h1>
      <div class="setting">
        <div class="setting__title">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2056 7.25452H16.9489C16.3401 7.25452 15.7937 6.86943 15.5369 6.29364C15.2802 5.68484 15.4086 5.04303 15.8597 4.59193L16.021 4.43056C16.3438 4.10782 16.3438 3.56503 16.021 3.24229L14.7704 1.99168C14.4477 1.66894 13.9049 1.66894 13.5822 1.99168L13.4208 2.15305C13.0027 2.57114 12.3279 2.69951 11.7521 2.47579C11.1433 2.21907 10.7912 1.67261 10.7912 1.06381V0.840092C10.7912 0.392659 10.4061 0.00390625 9.95503 0.00390625H8.19097C7.74354 0.00390625 7.35479 0.388992 7.35479 0.840092V1.09682C7.35479 1.70562 6.9697 2.25207 6.39391 2.5088C5.7851 2.76552 5.1433 2.63716 4.6922 2.18606L4.53083 2.02469C4.20809 1.70195 3.6653 1.70195 3.34256 2.02469L2.09195 3.27163C1.76921 3.59437 1.76921 4.13716 2.09195 4.4599L2.25332 4.62127C2.67141 5.03936 2.79977 5.71417 2.57606 6.28997C2.31933 6.89877 1.77288 7.25085 1.16408 7.25085H0.907353C0.456253 7.25452 0.071167 7.63594 0.071167 8.08704V9.85109C0.071167 10.2985 0.456253 10.6873 0.907353 10.6873H1.16408C1.77288 10.6873 2.31933 11.0724 2.57606 11.6482C2.83278 12.257 2.70442 12.8988 2.25332 13.3499L2.09195 13.5112C1.93058 13.6726 1.83523 13.8963 1.83523 14.12C1.83523 14.3438 1.93058 14.5675 2.09195 14.7288L3.34256 15.9795C3.6653 16.3022 4.20809 16.3022 4.53083 15.9795L4.6922 15.8181C4.98193 15.5284 5.36701 15.3707 5.7521 15.3707C5.94281 15.3707 6.17019 15.4037 6.3609 15.499C6.9697 15.7557 7.32178 16.3022 7.32178 16.911V17.1677C7.32178 17.6152 7.70687 18.0039 8.15797 18.0039H9.92203C10.3695 18.0039 10.7582 17.6188 10.7582 17.1677V16.911C10.7582 16.3022 11.1433 15.7557 11.7191 15.499C12.3279 15.2423 12.9697 15.3707 13.4208 15.8218L13.5822 15.9831C13.9049 16.3059 14.4477 16.3059 14.7704 15.9831L16.021 14.7325C16.3438 14.4098 16.3438 13.867 16.021 13.5442L15.8597 13.3829C15.4416 12.9354 15.3132 12.29 15.5369 11.7142C15.7937 11.1054 16.3401 10.7533 16.9489 10.7533H17.2056C17.6531 10.7533 18.0418 10.3682 18.0418 9.91711V8.15305C18.0418 7.63594 17.6567 7.25452 17.2056 7.25452ZM9.0565 12.8034C6.93669 12.8034 5.23865 11.1017 5.23865 8.98557C5.23865 6.86943 6.94036 5.16772 9.0565 5.16772C11.1726 5.16772 12.8743 6.86943 12.8743 8.98557C12.8743 11.1017 11.1726 12.8034 9.0565 12.8034Z"
              fill="#2AF3F3"
            />
          </svg>
          <p>setting</p>
          <span></span>
        </div>
        <div class="setting__body">show only fiat</div>
      </div>
    </header>
    <div class="wrapper__body">
      <div class="currencies">
        <div class="currency">
          <div class="currency__info">
            <div class="currency__name">
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.82122 6.94356C6.76397 6.78036 6.69527 6.64047 6.61512 6.52C6.53497 6.39954 6.41818 6.28297 6.26934 6.16834C6.1182 6.0537 5.98309 5.96044 5.86401 5.8905C5.74493 5.82055 5.58006 5.74089 5.36938 5.6554C5.16099 5.56797 4.99383 5.50386 4.87246 5.46111C4.75109 5.41837 4.57476 5.36008 4.34348 5.28625C4.13967 5.22019 3.98624 5.16967 3.88548 5.1347C3.78472 5.09973 3.6542 5.04921 3.48932 4.9851C3.32673 4.92098 3.20307 4.86269 3.12292 4.81412C3.04278 4.7636 2.95576 4.70337 2.86416 4.63148C2.77256 4.5596 2.70844 4.48188 2.6718 4.40222C2.63516 4.32062 2.61684 4.23124 2.61684 4.13604C2.61684 3.8854 2.74737 3.67945 3.00843 3.52013C3.26948 3.36081 3.6084 3.28115 4.02288 3.28115C4.20608 3.28115 4.39157 3.30252 4.58163 3.34527C4.7717 3.38801 4.93429 3.43659 5.06939 3.48905C5.2045 3.54345 5.33274 3.60173 5.45182 3.66585C5.5709 3.72997 5.65563 3.78048 5.706 3.81351C5.75638 3.84654 5.78844 3.86986 5.79989 3.87957C5.85714 3.91649 5.91439 3.93009 5.97622 3.91843C6.04263 3.91455 6.09072 3.8854 6.12736 3.82906L6.65634 3.01886C6.70901 2.94503 6.69756 2.87508 6.62428 2.80902C6.59909 2.78765 6.56474 2.76045 6.52581 2.73131C6.48688 2.70216 6.40215 2.64776 6.27163 2.57004C6.1411 2.49233 6.00141 2.42238 5.85714 2.36215C5.71058 2.30192 5.52052 2.23975 5.28923 2.17563C5.05565 2.11346 4.81521 2.07071 4.56789 2.0474V1.06816C4.56789 1.0157 4.54728 0.97296 4.50835 0.93993C4.46713 0.908844 4.41675 0.891357 4.35493 0.891357H3.47329C3.41604 0.891357 3.36795 0.908844 3.32673 0.943816C3.28551 0.978789 3.2649 1.01959 3.2649 1.06816V2.06683C2.5802 2.17757 2.02374 2.42627 1.59552 2.81097C1.1673 3.19566 0.954329 3.64254 0.954329 4.15352C0.954329 4.30507 0.972649 4.44885 1.00929 4.5868C1.04593 4.7228 1.09173 4.84715 1.14669 4.95595C1.20165 5.06476 1.2795 5.17162 1.37797 5.27848C1.47873 5.38339 1.57262 5.47471 1.66193 5.55049C1.75124 5.62626 1.86802 5.70398 2.01229 5.78558C2.15656 5.86718 2.28022 5.93324 2.38098 5.98181C2.48403 6.03233 2.61913 6.08868 2.78859 6.15279C2.95805 6.21691 3.09316 6.26742 3.19162 6.30045C3.29009 6.33348 3.42291 6.38011 3.59466 6.4384C3.83052 6.51612 4.00456 6.57635 4.11677 6.61909C4.23127 6.66184 4.37325 6.72013 4.54728 6.7959C4.72132 6.87167 4.84956 6.94162 4.92971 7.00379C5.00986 7.06597 5.08313 7.14368 5.14954 7.23694C5.21595 7.3302 5.24801 7.42735 5.24801 7.53032C5.24801 7.82176 5.1129 8.04714 4.84498 8.20646C4.57705 8.36578 4.26562 8.44544 3.91296 8.44544C3.75267 8.44544 3.59008 8.4299 3.42978 8.40075C2.86416 8.30361 2.33289 8.0724 1.84055 7.70713L1.82681 7.69547C1.78788 7.65467 1.73521 7.63913 1.6688 7.64496C1.6001 7.65273 1.54972 7.6741 1.51766 7.71102L0.851281 8.46293C0.784872 8.53676 0.789452 8.61253 0.865021 8.69025C0.88792 8.71162 0.92456 8.74659 0.979519 8.78934C1.03448 8.83403 1.13524 8.90397 1.28408 8.99723C1.43293 9.09243 1.59323 9.17987 1.76727 9.26341C1.9413 9.34696 2.16343 9.42856 2.43136 9.51016C2.69928 9.59177 2.97637 9.64811 3.2649 9.68114V10.6526C3.2649 10.7012 3.28551 10.742 3.32673 10.7769C3.36795 10.8119 3.41604 10.8294 3.47329 10.8294H4.35493C4.41675 10.8294 4.46713 10.8119 4.50606 10.7789C4.54499 10.7459 4.5656 10.7031 4.5656 10.6507V9.6792C5.25946 9.58399 5.82279 9.33141 6.2556 8.92146C6.6884 8.51344 6.90595 8.02577 6.90595 7.46038C6.90595 7.27969 6.87618 7.10677 6.82122 6.94356Z"
                  fill="#2D4D70"
                />
              </svg>
              <p>Dollar <span class="currency__name_teaser">(USD)</span></p>
            </div>
            <div class="currency__buttons">
              <button class="currency__button">
                <p>withdraw</p>
              </button>
              <button class="currency__button">
                <p>deposit</p>
              </button>
            </div>
          </div>
          <div class="currency__check">
            <p>Всего: 0.00001 EUR</p>
            <p>В заявках: 0.00000 EUR</p>
            <p class="currency__check_current-currency">1.98 EUR</p>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper__footer">
      <footer class="footer">
        <div class="footer__text">
          <div class="footer__balance">
            <div class="footer__svg">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.6494 8.24304C5.0996 8.24304 5.53386 8.21516 5.94422 8.15938V3.6534C5.53386 3.59762 5.0996 3.56973 4.6494 3.56973C2.07968 3.56973 0 4.51396 0 5.68129V6.13547C0 7.3028 2.07968 8.24304 4.6494 8.24304Z"
                  fill="white"
                />
                <path
                  d="M4.6494 10.5976C5.0996 10.5976 5.53386 10.5697 5.94422 10.5139V9.19121C5.53386 9.24699 5.0996 9.27487 4.6494 9.27487C2.41036 9.27487 0.537849 8.55376 0.0996016 7.5976C0.0358566 7.73704 0 7.88046 0 8.02787V8.48604C0 9.65336 2.07968 10.5976 4.6494 10.5976Z"
                  fill="white"
                />
                <path
                  d="M5.94422 11.6494V11.5458C5.53386 11.6016 5.0996 11.6295 4.6494 11.6295C2.41036 11.6295 0.537849 10.9084 0.0996016 9.95221C0.0318725 10.0956 0 10.2391 0 10.3865V10.8446C0 12.008 2.07968 12.9522 4.6494 12.9522C5.16335 12.9522 5.65737 12.9124 6.11952 12.8446C6.00398 12.6096 5.94422 12.3626 5.94422 12.1076V11.6494Z"
                  fill="white"
                />
                <path
                  d="M11.3525 0C8.78679 0 6.70312 0.944223 6.70312 2.10757V2.56574C6.70312 3.72908 8.78281 4.67331 11.3525 4.67331C13.9183 4.67331 16.0019 3.72908 16.0019 2.56574V2.10757C16.0019 0.944223 13.9223 0 11.3525 0Z"
                  fill="white"
                />
                <path
                  d="M11.3525 5.70519C9.11349 5.70519 7.24097 4.98407 6.80273 4.02789C6.73898 4.16734 6.70312 4.31076 6.70312 4.45817V4.91634C6.70312 6.07969 8.78281 7.02391 11.3525 7.02391C13.9183 7.02391 16.0019 6.07969 16.0019 4.91634V4.46216C16.0019 4.31475 15.9701 4.17132 15.9023 4.03188C15.4641 4.98805 13.5956 5.70519 11.3525 5.70519Z"
                  fill="white"
                />
                <path
                  d="M11.3525 8.05974C9.11349 8.05974 7.24097 7.33862 6.80273 6.38245C6.73898 6.52189 6.70312 6.66532 6.70312 6.81273V7.2709C6.70312 8.43425 8.78281 9.37847 11.3525 9.37847C13.9183 9.37847 16.0019 8.43425 16.0019 7.2709V6.81273C16.0019 6.66532 15.9701 6.52189 15.9023 6.38245C15.4641 7.34261 13.5956 8.05974 11.3525 8.05974Z"
                  fill="white"
                />
                <path
                  d="M11.3525 10.5406C9.11349 10.5406 7.24097 9.81946 6.80273 8.86328C6.73898 9.00272 6.70312 9.14615 6.70312 9.29356V9.75173C6.70312 10.9151 8.78281 11.8593 11.3525 11.8593C13.9183 11.8593 16.0019 10.9151 16.0019 9.75173V9.29356C16.0019 9.14615 15.9701 9.00272 15.9023 8.86328C15.4641 9.81946 13.5956 10.5406 11.3525 10.5406Z"
                  fill="white"
                />
                <path
                  d="M11.3525 12.8964C9.11349 12.8964 7.24097 12.1753 6.80273 11.2191C6.73898 11.3586 6.70312 11.502 6.70312 11.6494V12.1076C6.70312 13.2709 8.78281 14.2151 11.3525 14.2151C13.9183 14.2151 16.0019 13.2709 16.0019 12.1076V11.6494C16.0019 11.502 15.9701 11.3586 15.9023 11.2191C15.4641 12.1753 13.5956 12.8964 11.3525 12.8964Z"
                  fill="white"
                />
              </svg>
            </div>

            <p>0.0082243 EUR</p>
            <span class="footer__arrow"></span>
          </div>
          <p>Total balance</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #0c223c;
  font-family: "Raleway", Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.wrapper__header {
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 20px;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;

  background: linear-gradient(
    270deg,
    #2d4d70 11.98%,
    #213b57 44.89%,
    #14273c 100%
  );
  box-shadow: 0px 18px 21px rgba(34, 39, 47, 0.34);
}

.wrapper__body {
  width: 100%;
  flex: 1 1 auto;
  padding: 0 20px;

  mix-blend-mode: normal;
  box-shadow: 0px 18px 34px rgba(34, 39, 47, 0.55);
}

.wrapper__footer {
  width: 100%;
  background: #0c223c;
  padding: 20px;

  border-radius: 2px;
  flex: 0 1 auto;
}

.footer {
  width: 100%;
  height: 60px;

  background: rgba(36, 160, 245, 0.06);
  border-radius: 2px;
  flex: 0 1 auto;
}

.header__title {
  width: 60px;
  height: 21px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;

  color: #24a0f5;

  text-shadow: 0px 0px 10px #102032;
}

.currencies {
  & div:last-child {
    margin: 0;
  }
}

.currency {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 0 15px 0;
  margin: 0 0 10px 0;

  &::before {
    content: "";
    bottom: 0px;
    left: 0;
    position: absolute;
    color: #fff;
    width: 100%;
    height: 1px;
    opacity: 0.21;

    background-image: linear-gradient(
      to right,
      rgba(36, 160, 245) 50%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 10px 2px;
    background-repeat: repeat-x;
  }
}

.currency__info {
  padding: 5px 0 0 0;
}

.currency__name {
  display: flex;
  margin: 0 0 20px 0;
  font-size: 16px;
  padding: 0 0 0 20px;
  position: relative;

  color: #ffffff;

  .currency__name_teaser {
    color: rgba(166, 174, 191, 1);
  }

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0px;

    background: #24a0f5;
    box-shadow: 0px 0px 10px rgba(42, 243, 243, 0.55);
    border-radius: 50%;

    /* Group */
  }
}

.currency__buttons button:last-child {
  margin: 0;
}

.currency__button {
  width: 130px;
  height: 30px;
  text-transform: uppercase;
  margin: 0 20px 0 0;

  background: rgba(36, 160, 245, 0.2);

  border-radius: 1.6px;
  transition: 500ms;

  &:hover {
    opacity: 1;
    background: rgba(36, 160, 245, 1);
    box-shadow: 0px 0px 10px rgba(0, 133, 255, 0.55);
    p {
      color: #0d1c47;
    }
  }

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: #24a0f5;
    transition: 500ms;
  }
}

.currency__check {
  text-align: right;
  p {
    color: #ffffff;
    margin: 0 0 10px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }

  .currency__check_current-currency {
    text-transform: uppercase;
    color: #24a0f5;
    margin: 0;
  }
}

.footer__text {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .footer__balance {
    display: flex;
    color: #24a0f5;
    font-size: 18px;
    margin: 0 0 8px 0;

    .footer__svg {
      margin: 0 5px 0 0;
    }
  }
  .footer__arrow {
    width: 0;
    height: 0;
    position: relative;
    top: 5px;
    left: 5px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #24a0f5;
  }
}

.setting {
  width: 186px;
  position: relative;

  background: #2d4d70;
  box-shadow: 0px 18px 44px rgba(34, 39, 47, 0.55);
  border-radius: 6px;

  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;

  .setting__title {
    text-transform: uppercase;
    width: 100%;
    height: 32px;

    display: flex;

    justify-content: center;
    align-items: center;

    background: rgba(42, 243, 243, 0.2);

    border-radius: 4px;

    display: flex;
    color: #2af3f3;
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 1px;
      left: -3px;
    }

    span {
      color: #2af3f3;
      position: relative;
      top: 0px;
      right: -5px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #2af3f3;
    }
  }

  .setting__body {
    background: #2d4d70;
    width: 100%;
    height: 116px;
    position: absolute;
    top: 32px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    display: none;
  }
}

.setting .open {
  width: 186px;
  position: relative;

  background: #2d4d70;
  box-shadow: 0px 18px 34px rgba(34, 39, 47, 0.55);
  border-radius: 6px;

  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;

  .setting__title {
    text-transform: uppercase;
    width: 100%;
    height: 32px;

    display: flex;

    justify-content: center;
    align-items: center;

    background: rgba(42, 243, 243, 0.2);

    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    color: #2af3f3;
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 1px;
      left: -3px;
    }

    span {
      color: #2af3f3;
      position: relative;
      top: 0px;
      right: -5px;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 5px solid #2af3f3;
    }
  }

  .setting__body {
    background: #2d4d70;
    width: 100%;
    height: 116px;
    position: absolute;
    top: 32px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>