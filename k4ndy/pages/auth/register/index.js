import React, {useRef} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {useRouter} from 'next/router';
import AppConfig from '../../../layout/AppConfig';
import {useDispatch, useSelector} from "react-redux";
import {Messages} from "primereact/messages";
import {signup} from "../../../demo/actions/auth";
import Link from "next/link";
import Head from "next/head";
import {Controller, useForm} from "react-hook-form";


import {classNames} from 'primereact/utils';
import {Password} from "primereact/password";


function Register() {
    const history = useRouter();
    const dispatch = useDispatch();
    const message = useRef();
    let respuestaError = null;
    respuestaError = useSelector((state) => state.auth.authData?.message);
    //console.log("Error: " + respuestaError);

    const defaultValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const {
        control,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({defaultValues});

    const onSubmit = (data) => {
        //console.log("data: " + JSON.stringify(data));
        if (data.username !== '' && data.email !== '' && data.password !== '' && data.confirmPassword !== '') {
            dispatch(signup(data, history));
            //Validamos los errores
            if (respuestaError !== null) {
                message.current.show({severity: 'warn', content: ' Hola! 👋🏻 ' + respuestaError});
                //respuestaError = 'undefined';
            }
        } else {
            message.current.show({severity: 'warn', content: 'Hola! 👋🏻 Todos los datos son necesarios.'});
        }
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> :
            <small className="p-error">&nbsp;</small>;
    };

    return (
        <>
            <Head>
                <title>Registrarse</title>
            </Head>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 800"
                 className="fixed left-0 top-0 min-h-screen min-w-screen" preserveAspectRatio="none">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="-2" width="422" height="523">
                    <rect y="-2" width="422" height="523" fill="url(#paint0_radial)"/>
                </mask>
                <g mask="url(#mask0)">
                    <g opacity="0.04">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.21053 249.423C7.51158 285.033 52.032 285.007 55.3222 249.423C43.9215 248.193 34.2807 239.736 29.7663 228.011C25.252 239.736 15.6112 248.193 4.21053 249.423ZM26.9026 282.739C25.908 295.63 17.1525 306.881 6.29841 309.238C-8.3705 312.814 -22.9082 299.961 -24.209 282.739C-12.8083 281.509 -3.16752 273.052 1.34683 261.327C5.82839 273.141 15.8955 281.65 26.9026 282.739ZM55.3222 316.056C54.0105 331.228 43.0471 343.12 29.7663 343.12C16.4856 343.12 5.52221 331.228 4.21053 316.056C15.2177 314.967 25.2848 306.459 29.7663 294.644C34.2479 306.459 44.315 314.967 55.3222 316.056ZM83.7417 282.739C82.43 298.859 69.8488 311.276 55.8467 309.674C43.9105 308.611 33.6794 296.719 32.6301 282.739C43.6372 281.65 53.7043 273.141 58.1859 261.327C62.7002 273.052 72.341 281.509 83.7417 282.739Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M116.468 249.423C119.769 285.033 164.29 285.007 167.58 249.423C156.179 248.193 146.539 239.736 142.024 228.011C137.51 239.736 127.869 248.193 116.468 249.423ZM139.16 282.739C138.166 295.63 129.41 306.881 118.556 309.238C103.887 312.814 89.3496 299.961 88.0488 282.739C99.4495 281.509 109.09 273.052 113.605 261.327C118.086 273.141 128.153 281.65 139.16 282.739ZM167.58 316.056C166.268 331.228 155.305 343.12 142.024 343.12C128.743 343.12 117.78 331.228 116.468 316.056C127.475 314.967 137.543 306.459 142.024 294.644C146.506 306.459 156.573 314.967 167.58 316.056ZM195.999 282.739C194.688 298.859 182.107 311.276 168.105 309.674C156.168 308.611 145.937 296.719 144.888 282.739C155.895 281.65 165.962 273.141 170.444 261.327C174.958 273.052 184.599 281.509 195.999 282.739Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M60.3394 318.189C63.6405 353.799 108.161 353.774 111.451 318.189C100.05 316.959 90.4096 308.502 85.8953 296.777C81.3809 308.502 71.7401 316.959 60.3394 318.189ZM83.0316 351.505C82.0369 364.396 73.2814 375.647 62.4273 378.005C47.7584 381.58 33.2207 368.727 31.9199 351.505C43.3206 350.275 52.9614 341.818 57.4757 330.093C61.9573 341.908 72.0244 350.416 83.0316 351.505ZM111.451 384.822C110.139 399.994 99.176 411.886 85.8953 411.886C72.6145 411.886 61.6511 399.994 60.3394 384.822C71.3466 383.733 81.4137 375.225 85.8953 363.41C90.3768 375.225 100.444 383.733 111.451 384.822ZM139.871 351.505C138.559 367.625 125.978 380.042 111.976 378.44C100.039 377.377 89.8083 365.485 88.7589 351.505C99.7661 350.416 109.833 341.908 114.315 330.093C118.829 341.818 128.47 350.275 139.871 351.505Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M60.3394 182.152C63.6405 217.762 108.161 217.736 111.451 182.152C100.05 180.922 90.4096 172.465 85.8953 160.74C81.3809 172.465 71.7401 180.922 60.3394 182.152ZM83.0316 215.468C82.0369 228.359 73.2814 239.61 62.4273 241.967C47.7584 245.543 33.2207 232.69 31.9199 215.468C43.3206 214.238 52.9614 205.781 57.4757 194.056C61.9573 205.87 72.0244 214.379 83.0316 215.468ZM111.451 248.785C110.139 263.957 99.176 275.849 85.8953 275.849C72.6145 275.849 61.6511 263.957 60.3394 248.785C71.3466 247.696 81.4137 239.188 85.8953 227.373C90.3768 239.188 100.444 247.696 111.451 248.785ZM139.871 215.468C138.559 231.588 125.978 244.005 111.976 242.403C100.039 241.34 89.8083 229.448 88.7589 215.468C99.7661 214.379 109.833 205.87 114.315 194.056C118.829 205.781 128.47 214.238 139.871 215.468Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.93514 383.965C6.23619 419.575 50.7567 419.55 54.0468 383.965C42.6461 382.735 33.0053 374.278 28.491 362.553C23.9766 374.278 14.3358 382.735 2.93514 383.965ZM25.6273 417.282C24.6326 430.172 15.8771 441.423 5.02302 443.781C-9.64589 447.356 -24.1836 434.504 -25.4844 417.282C-14.0837 416.051 -4.44291 407.594 0.0714417 395.869C4.553 407.684 14.6201 416.192 25.6273 417.282ZM54.0468 450.599C52.7351 465.771 41.7717 477.662 28.491 477.662C15.2102 477.662 4.24682 465.771 2.93514 450.599C13.9423 449.51 24.0094 441.001 28.491 429.187C32.9725 441.001 43.0396 449.51 54.0468 450.599ZM82.4663 417.282C81.1546 433.402 68.5735 445.818 54.5713 444.217C42.6351 443.153 32.404 431.262 31.3547 417.282C42.3618 416.192 52.4289 407.684 56.9105 395.869C61.4248 407.594 71.0656 416.051 82.4663 417.282Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M-53.1938 452.732C-49.8927 488.342 -5.37225 488.316 -2.08213 452.732C-13.4828 451.501 -23.1236 443.044 -27.6379 431.319C-32.1523 443.044 -41.7931 451.501 -53.1938 452.732ZM-30.5016 486.048C-31.4963 498.939 -40.2518 510.189 -51.1059 512.547C-65.7748 516.122 -80.3125 503.27 -81.6133 486.048C-70.2126 484.818 -60.5718 476.36 -56.0575 464.635C-51.5759 476.45 -41.5088 484.958 -30.5016 486.048ZM-2.08213 519.365C-3.39381 534.537 -14.3572 546.428 -27.6379 546.428C-40.9187 546.428 -51.8821 534.537 -53.1938 519.365C-42.1866 518.276 -32.1195 509.767 -27.6379 497.953C-23.1564 509.767 -13.0893 518.276 -2.08213 519.365ZM26.3374 486.048C25.0257 502.168 12.4445 514.584 -1.55759 512.983C-13.4938 511.919 -23.7249 500.028 -24.7743 486.048C-13.7671 484.958 -3.7 476.45 0.781563 464.635C5.29591 476.36 14.9367 484.818 26.3374 486.048Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M-53.1938 316.694C-49.8927 352.305 -5.37225 352.279 -2.08213 316.694C-13.4828 315.464 -23.1236 307.007 -27.6379 295.282C-32.1523 307.007 -41.7931 315.464 -53.1938 316.694ZM-30.5016 350.011C-31.4963 362.901 -40.2518 374.152 -51.1059 376.51C-65.7748 380.085 -80.3125 367.233 -81.6133 350.011C-70.2126 348.78 -60.5718 340.323 -56.0575 328.598C-51.5759 340.413 -41.5088 348.921 -30.5016 350.011ZM-2.08213 383.328C-3.39381 398.5 -14.3572 410.391 -27.6379 410.391C-40.9187 410.391 -51.8821 398.5 -53.1938 383.328C-42.1866 382.239 -32.1195 373.73 -27.6379 361.916C-23.1564 373.73 -13.0893 382.239 -2.08213 383.328ZM26.3374 350.011C25.0257 366.131 12.4445 378.547 -1.55759 376.946C-13.4938 375.882 -23.7249 363.991 -24.7743 350.011C-13.7671 348.921 -3.7 340.413 0.781563 328.598C5.29591 340.323 14.9367 348.78 26.3374 350.011Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M2.93514 113.386C6.23619 148.996 50.7567 148.971 54.0468 113.386C42.6461 112.156 33.0053 103.699 28.491 91.9741C23.9766 103.699 14.3358 112.156 2.93514 113.386ZM25.6273 146.702C24.6326 159.593 15.8771 170.844 5.02302 173.202C-9.64589 176.777 -24.1836 163.924 -25.4844 146.702C-14.0837 145.472 -4.44291 137.015 0.0714417 125.29C4.553 137.105 14.6201 145.613 25.6273 146.702ZM54.0468 180.02C52.7351 195.192 41.7717 207.083 28.491 207.083C15.2102 207.083 4.24682 195.192 2.93514 180.02C13.9423 178.931 24.0094 170.422 28.491 158.608C32.9725 170.422 43.0396 178.931 54.0468 180.02ZM82.4663 146.702C81.1546 162.822 68.5735 175.239 54.5713 173.638C42.6351 172.574 32.404 160.683 31.3547 146.702C42.3618 145.613 52.4289 137.105 56.9105 125.29C61.4248 137.015 71.0656 145.472 82.4663 146.702Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M-53.1938 182.152C-49.8927 217.762 -5.37225 217.736 -2.08213 182.152C-13.4828 180.922 -23.1236 172.465 -27.6379 160.74C-32.1523 172.465 -41.7931 180.922 -53.1938 182.152ZM-30.5016 215.468C-31.4963 228.359 -40.2518 239.61 -51.1059 241.967C-65.7748 245.543 -80.3125 232.69 -81.6133 215.468C-70.2126 214.238 -60.5718 205.781 -56.0575 194.056C-51.5759 205.87 -41.5088 214.379 -30.5016 215.468ZM-2.08213 248.785C-3.39381 263.957 -14.3572 275.849 -27.6379 275.849C-40.9187 275.849 -51.8821 263.957 -53.1938 248.785C-42.1866 247.696 -32.1195 239.188 -27.6379 227.373C-23.1564 239.188 -13.0893 247.696 -2.08213 248.785ZM26.3374 215.468C25.0257 231.588 12.4445 244.005 -1.55759 242.403C-13.4938 241.34 -23.7249 229.448 -24.7743 215.468C-13.7671 214.379 -3.7 205.87 0.781563 194.056C5.29591 205.781 14.9367 214.238 26.3374 215.468Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M-53.1938 46.1153C-49.8927 81.7254 -5.37225 81.6998 -2.08213 46.1153C-13.4828 44.8852 -23.1236 36.4279 -27.6379 24.7031C-32.1523 36.4279 -41.7931 44.8852 -53.1938 46.1153ZM-30.5016 79.4315C-31.4963 92.3224 -40.2518 103.573 -51.1059 105.931C-65.7748 109.506 -80.3125 96.6535 -81.6133 79.4315C-70.2126 78.2013 -60.5718 69.7441 -56.0575 58.0193C-51.5759 69.8338 -41.5088 78.3423 -30.5016 79.4315ZM-2.08213 112.749C-3.39381 127.921 -14.3572 139.812 -27.6379 139.812C-40.9187 139.812 -51.8821 127.921 -53.1938 112.749C-42.1866 111.66 -32.1195 103.151 -27.6379 91.3365C-23.1564 103.151 -13.0893 111.66 -2.08213 112.749ZM26.3374 79.4315C25.0257 95.5515 12.4445 107.968 -1.55759 106.366C-13.4938 105.303 -23.7249 93.4115 -24.7743 79.4315C-13.7671 78.3423 -3.7 69.8338 0.781563 58.0193C5.29591 69.7441 14.9367 78.2013 26.3374 79.4315Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M231.211 -21.2802C234.512 14.3299 279.032 14.3043 282.322 -21.2802C270.922 -22.5103 261.281 -30.9676 256.766 -42.6924C252.252 -30.9676 242.611 -22.5103 231.211 -21.2802ZM253.903 12.036C252.908 24.9268 244.153 36.1775 233.298 38.5353C218.63 42.1104 204.092 29.258 202.791 12.036C214.192 10.8058 223.832 2.34858 228.347 -9.37623C232.828 2.43827 242.896 10.9468 253.903 12.036ZM282.322 45.3532C281.01 60.525 270.047 72.4164 256.766 72.4164C243.486 72.4164 232.522 60.525 231.211 45.3532C242.218 44.264 252.285 35.7555 256.766 23.941C261.248 35.7555 271.315 44.264 282.322 45.3532ZM310.742 12.036C309.43 28.156 296.849 40.5727 282.847 38.971C270.91 37.9074 260.679 26.016 259.63 12.036C270.637 10.9468 280.704 2.43828 285.186 -9.37623C289.7 2.34858 299.341 10.8058 310.742 12.036Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M343.468 -21.2802C346.769 14.3299 391.29 14.3043 394.58 -21.2802C383.179 -22.5103 373.539 -30.9676 369.024 -42.6924C364.51 -30.9676 354.869 -22.5103 343.468 -21.2802ZM366.16 12.036C365.166 24.9268 356.41 36.1775 345.556 38.5353C330.887 42.1104 316.35 29.258 315.049 12.036C326.449 10.8058 336.09 2.34858 340.605 -9.37623C345.086 2.43827 355.153 10.9468 366.16 12.036ZM394.58 45.3532C393.268 60.525 382.305 72.4164 369.024 72.4164C355.743 72.4164 344.78 60.525 343.468 45.3532C354.475 44.264 364.543 35.7555 369.024 23.941C373.506 35.7555 383.573 44.264 394.58 45.3532ZM422.999 12.036C421.688 28.156 409.107 40.5727 395.105 38.971C383.168 37.9074 372.937 26.016 371.888 12.036C382.895 10.9468 392.962 2.43828 397.444 -9.37623C401.958 2.34858 411.599 10.8058 422.999 12.036Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M287.339 47.4859C290.64 83.096 335.161 83.0704 338.451 47.4859C327.05 46.2558 317.41 37.7985 312.895 26.0737C308.381 37.7985 298.74 46.2558 287.339 47.4859ZM310.032 80.8021C309.037 93.693 300.281 104.944 289.427 107.301C274.758 110.877 260.221 98.0241 258.92 80.8021C270.321 79.5719 279.961 71.1147 284.476 59.3899C288.957 71.2044 299.024 79.7129 310.032 80.8021ZM338.451 114.119C337.139 129.291 326.176 141.183 312.895 141.183C299.615 141.183 288.651 129.291 287.339 114.119C298.347 113.03 308.414 104.522 312.895 92.7072C317.377 104.522 327.444 113.03 338.451 114.119ZM366.871 80.8021C365.559 96.9221 352.978 109.339 338.976 107.737C327.039 106.674 316.808 94.7822 315.759 80.8021C326.766 79.7129 336.833 71.2044 341.315 59.3899C345.829 71.1147 355.47 79.5719 366.871 80.8021Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M287.339 -88.5512C290.64 -52.9411 335.161 -52.9667 338.451 -88.5512C327.05 -89.7813 317.41 -98.2386 312.895 -109.963C308.381 -98.2386 298.74 -89.7813 287.339 -88.5512ZM310.032 -55.235C309.037 -42.3442 300.281 -31.0935 289.427 -28.7357C274.758 -25.1606 260.221 -38.013 258.92 -55.235C270.321 -56.4652 279.961 -64.9224 284.476 -76.6472C288.957 -64.8327 299.024 -56.3242 310.032 -55.235ZM338.451 -21.9178C337.139 -6.746 326.176 5.14539 312.895 5.14539C299.615 5.14539 288.651 -6.746 287.339 -21.9178C298.347 -23.007 308.414 -31.5155 312.895 -43.33C317.377 -31.5155 327.444 -23.007 338.451 -21.9178ZM366.871 -55.235C365.559 -39.115 352.978 -26.6983 338.976 -28.3C327.039 -29.3636 316.808 -41.255 315.759 -55.235C326.766 -56.3242 336.833 -64.8327 341.315 -76.6472C345.829 -64.9224 355.47 -56.4652 366.871 -55.235Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M117.677 113.262C120.978 148.872 165.499 148.847 168.789 113.262C157.388 112.032 147.747 103.575 143.233 91.8501C138.719 103.575 129.078 112.032 117.677 113.262ZM140.369 146.578C139.375 159.469 130.619 170.72 119.765 173.078C105.096 176.653 90.5586 163.8 89.2578 146.578C100.658 145.348 110.299 136.891 114.814 125.166C119.295 136.981 129.362 145.489 140.369 146.578ZM168.789 179.896C167.477 195.067 156.514 206.959 143.233 206.959C129.952 206.959 118.989 195.067 117.677 179.896C128.684 178.807 138.752 170.298 143.233 158.484C147.715 170.298 157.782 178.807 168.789 179.896ZM197.208 146.578C195.897 162.698 183.316 175.115 169.314 173.513C157.377 172.45 147.146 160.559 146.097 146.578C157.104 145.489 167.171 136.981 171.653 125.166C176.167 136.891 185.808 145.348 197.208 146.578Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M229.935 113.262C233.236 148.872 277.757 148.847 281.047 113.262C269.646 112.032 260.005 103.575 255.491 91.8501C250.977 103.575 241.336 112.032 229.935 113.262ZM252.627 146.578C251.633 159.469 242.877 170.72 232.023 173.078C217.354 176.653 202.816 163.8 201.516 146.578C212.916 145.348 222.557 136.891 227.071 125.166C231.553 136.981 241.62 145.489 252.627 146.578ZM281.047 179.896C279.735 195.067 268.772 206.959 255.491 206.959C242.21 206.959 231.247 195.067 229.935 179.896C240.942 178.807 251.009 170.298 255.491 158.484C259.973 170.298 270.04 178.807 281.047 179.896ZM309.466 146.578C308.155 162.698 295.573 175.115 281.571 173.513C269.635 172.45 259.404 160.559 258.355 146.578C269.362 145.489 279.429 136.981 283.91 125.166C288.425 136.891 298.066 145.348 309.466 146.578Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M173.806 182.028C177.107 217.638 221.628 217.612 224.918 182.028C213.517 180.798 203.876 172.341 199.362 160.616C194.848 172.341 185.207 180.798 173.806 182.028ZM196.498 215.344C195.504 228.235 186.748 239.486 175.894 241.843C161.225 245.419 146.687 232.566 145.387 215.344C156.787 214.114 166.428 205.657 170.943 193.932C175.424 205.746 185.491 214.255 196.498 215.344ZM224.918 248.661C223.606 263.833 212.643 275.724 199.362 275.724C186.081 275.724 175.118 263.833 173.806 248.661C184.813 247.572 194.881 239.064 199.362 227.249C203.844 239.064 213.911 247.572 224.918 248.661ZM253.337 215.344C252.026 231.464 239.445 243.881 225.442 242.279C213.506 241.216 203.275 229.324 202.226 215.344C213.233 214.255 223.3 205.746 227.782 193.932C232.296 205.657 241.937 214.114 253.337 215.344Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M173.806 45.9913C177.107 81.6014 221.628 81.5758 224.918 45.9913C213.517 44.7611 203.876 36.3039 199.362 24.5791C194.848 36.3039 185.207 44.7611 173.806 45.9913ZM196.498 79.3074C195.504 92.1983 186.748 103.449 175.894 105.807C161.225 109.382 146.687 96.5295 145.387 79.3074C156.787 78.0773 166.428 69.6201 170.943 57.8953C175.424 69.7098 185.491 78.2183 196.498 79.3074ZM224.918 112.625C223.606 127.796 212.643 139.688 199.362 139.688C186.081 139.688 175.118 127.796 173.806 112.625C184.813 111.536 194.881 103.027 199.362 91.2125C203.844 103.027 213.911 111.536 224.918 112.625ZM253.337 79.3074C252.026 95.4275 239.445 107.844 225.442 106.242C213.506 105.179 203.275 93.2875 202.226 79.3074C213.233 78.2183 223.3 69.7098 227.782 57.8953C232.296 69.6201 241.937 78.0773 253.337 79.3074Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M173.806 -88.5512C177.107 -52.9411 221.628 -52.9667 224.918 -88.5512C213.517 -89.7813 203.876 -98.2386 199.362 -109.963C194.848 -98.2386 185.207 -89.7813 173.806 -88.5512ZM196.498 -55.235C195.504 -42.3442 186.748 -31.0935 175.894 -28.7357C161.225 -25.1606 146.687 -38.013 145.387 -55.235C156.787 -56.4652 166.428 -64.9224 170.943 -76.6472C175.424 -64.8327 185.491 -56.3242 196.498 -55.235ZM224.918 -21.9178C223.606 -6.746 212.643 5.14539 199.362 5.14539C186.081 5.14539 175.118 -6.746 173.806 -21.9178C184.813 -23.007 194.881 -31.5155 199.362 -43.33C203.844 -31.5155 213.911 -23.007 224.918 -21.9178ZM253.337 -55.235C252.026 -39.115 239.445 -26.6983 225.442 -28.3C213.506 -29.3636 203.275 -41.255 202.226 -55.235C213.233 -56.3242 223.3 -64.8327 227.782 -76.6472C232.296 -64.9224 241.937 -56.4652 253.337 -55.235Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.41952 -21.2802C8.72057 14.3299 53.241 14.3043 56.5312 -21.2802C45.1305 -22.5103 35.4897 -30.9676 30.9753 -42.6924C26.461 -30.9676 16.8202 -22.5103 5.41952 -21.2802ZM28.1116 12.036C27.1169 24.9268 18.3615 36.1775 7.50739 38.5353C-7.16151 42.1104 -21.6993 29.258 -23 12.036C-11.5993 10.8058 -1.95853 2.34858 2.55582 -9.37623C7.03738 2.43827 17.1045 10.9468 28.1116 12.036ZM56.5312 45.3532C55.2195 60.525 44.2561 72.4164 30.9753 72.4164C17.6946 72.4164 6.73119 60.525 5.41952 45.3532C16.4267 44.264 26.4938 35.7555 30.9753 23.941C35.4569 35.7555 45.524 44.264 56.5312 45.3532ZM84.9507 12.036C83.639 28.156 71.0578 40.5727 57.0557 38.971C45.1194 37.9074 34.8884 26.016 33.839 12.036C44.8462 10.9468 54.9133 2.43828 59.3948 -9.37623C63.9092 2.34858 73.55 10.8058 84.9507 12.036Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M117.677 -21.2802C120.978 14.3299 165.499 14.3043 168.789 -21.2802C157.388 -22.5103 147.748 -30.9676 143.233 -42.6924C138.719 -30.9676 129.078 -22.5103 117.677 -21.2802ZM140.369 12.036C139.375 24.9268 130.619 36.1775 119.765 38.5353C105.096 42.1104 90.5586 29.258 89.2578 12.036C100.658 10.8058 110.299 2.34858 114.814 -9.37623C119.295 2.43827 129.362 10.9468 140.369 12.036ZM168.789 45.3532C167.477 60.525 156.514 72.4164 143.233 72.4164C129.952 72.4164 118.989 60.525 117.677 45.3532C128.684 44.264 138.752 35.7555 143.233 23.941C147.715 35.7555 157.782 44.264 168.789 45.3532ZM197.208 12.036C195.897 28.156 183.316 40.5727 169.314 38.971C157.377 37.9074 147.146 26.016 146.097 12.036C157.104 10.9468 167.171 2.43828 171.653 -9.37623C176.167 2.34858 185.808 10.8058 197.208 12.036Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M61.5484 47.4859C64.8495 83.096 109.37 83.0704 112.66 47.4859C101.259 46.2558 91.6186 37.7985 87.1042 26.0737C82.5899 37.7985 72.9491 46.2558 61.5484 47.4859ZM84.2405 80.8021C83.2459 93.693 74.4904 104.944 63.6363 107.301C48.9674 110.877 34.4297 98.0241 33.1289 80.8021C44.5296 79.5719 54.1704 71.1147 58.6847 59.3899C63.1663 71.2044 73.2334 79.7129 84.2405 80.8021ZM112.66 114.119C111.348 129.291 100.385 141.183 87.1042 141.183C73.8235 141.183 62.8601 129.291 61.5484 114.119C72.5556 113.03 82.6227 104.522 87.1042 92.7072C91.5858 104.522 101.653 113.03 112.66 114.119ZM141.08 80.8021C139.768 96.9221 127.187 109.339 113.185 107.737C101.248 106.674 91.0173 94.7822 89.9679 80.8021C100.975 79.7129 111.042 71.2044 115.524 59.3899C120.038 71.1147 129.679 79.5719 141.08 80.8021Z"
                              fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M61.5484 -88.5512C64.8495 -52.9411 109.37 -52.9667 112.66 -88.5512C101.259 -89.7813 91.6186 -98.2386 87.1042 -109.963C82.5899 -98.2386 72.9491 -89.7813 61.5484 -88.5512ZM84.2405 -55.235C83.2459 -42.3442 74.4904 -31.0935 63.6363 -28.7357C48.9674 -25.1606 34.4297 -38.013 33.1289 -55.235C44.5296 -56.4652 54.1704 -64.9224 58.6847 -76.6472C63.1663 -64.8327 73.2334 -56.3242 84.2405 -55.235ZM112.66 -21.9178C111.348 -6.746 100.385 5.14539 87.1042 5.14539C73.8235 5.14539 62.8601 -6.746 61.5484 -21.9178C72.5556 -23.007 82.6227 -31.5155 87.1042 -43.33C91.5858 -31.5155 101.653 -23.007 112.66 -21.9178ZM141.08 -55.235C139.768 -39.115 127.187 -26.6983 113.185 -28.3C101.248 -29.3636 91.0173 -41.255 89.9679 -55.235C100.975 -56.3242 111.042 -64.8327 115.524 -76.6472C120.038 -64.9224 129.679 -56.4652 141.08 -55.235Z"
                              fill="white"/>
                    </g>
                </g>
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(82 99.5) rotate(50.4774) scale(311.133 251.048)">
                        <stop/>
                        <stop offset="1" stopOpacity="0"/>
                    </radialGradient>
                </defs>
            </svg>
            <div className="px-5 min-h-screen flex justify-content-center align-items-center">
                <div className="border-1 surface-border surface-card border-round py-7 px-4 md:px-7 z-1">
                    <div className="mb-4">
                        <div className="text-900 text-xl font-bold mb-2">Registro</div>
                        <span className="text-600 font-medium">Empecemos</span>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-column">
                        <span className="p-input-icon-left w-full mb-4">
                            <i className="pi pi-user"></i>
                            <Controller
                                name="username"
                                control={control}
                                rules={{required: 'Se requiere un alias.'}}
                                render={({field, fieldState}) => (
                                    <>
                                        <label htmlFor={field.name}
                                               className={classNames({'p-error': errors.value})}></label>
                                        <span className="p-float-label">
                                <InputText id={field.name} value={field.value}
                                           className="w-full"
                                           onChange={(e) => field.onChange(e.target.value)}
                                />
                                <label htmlFor={field.name}>Alias</label>
                            </span>
                                        {getFormErrorMessage(field.name)}
                                    </>
                                )}
                            />

                        </span>
                            <span className="p-input-icon-left w-full mb-4">
                            <i className="pi pi-envelope"></i>
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{required: 'Se requiere un correo.'}}
                                    render={({field, fieldState}) => (
                                        <>
                                            <label htmlFor={field.name}
                                                   className={classNames({'p-error': errors.value})}></label>
                                            <span className="p-float-label">
                                <InputText id={field.name} type="email" value={field.value}
                                           className="w-full"
                                           onKeyUp={(e) => field.onChange(e.target.value.toLowerCase().replace(/\s/g, ''))}
                                           onChange={(e) => field.onChange(e.target.value.toLowerCase().replace(/\s/g, ''))}
                                />
                                <label htmlFor={field.name}>Correo electrónico</label>
                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                        </span>
                            <span className="p-input-icon-left w-full mb-4">
                            <i className="pi pi-lock"></i>
                                {/*<InputText id="password" name="password" type="password" className="w-full md:w-25rem"*/}
                                {/*           placeholder="Contraseña" onKeyUp={handleChange}/>*/}

                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{required: 'Se requiere una contraseña.'}}
                                    render={({field, fieldState}) => (
                                        <>
                                            <label htmlFor={field.name}
                                                   className={classNames({'p-error': errors.password})}></label>
                                            <span className="p-float-label">
                                <Password id={field.name} value={field.value}
                                          className="w-full"
                                          onChange={(e) => field.onChange(e.target.value)} toggleMask/>
                                <label htmlFor={field.name}>Contraseña</label>
                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                        </span>
                            <span className="p-input-icon-left w-full mb-4">
                            <i className="pi pi-lock"></i>
                                {/*<InputText id="confirmPassword" name="confirmPassword" type="password"*/}
                                {/*           className="w-full md:w-25rem" placeholder="Repite la contraseña"*/}
                                {/*           onKeyUp={handleChange}/>*/}

                                <Controller
                                    name="confirmPassword"
                                    control={control}
                                    rules={{required: 'Se requiere confirmar la contraseña.'}}
                                    render={({field, fieldState}) => (
                                        <>
                                            <label htmlFor={field.name}
                                                   className={classNames({'p-error': errors.password})}></label>
                                            <span className="p-float-label">
                                <Password id={field.name} value={field.value}
                                          className="w-full"
                                          onChange={(e) => field.onChange(e.target.value)} toggleMask feedback={false}/>
                                <label htmlFor={field.name}>Confirmar Contraseña</label>
                            </span>
                                            {getFormErrorMessage(field.name)}
                                        </>
                                    )}
                                />
                        </span>
                            <div className="mb-4 flex flex-wrap">
                                {/*<Checkbox name="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.checked)} className="mr-2"></Checkbox>*/}
                                <label htmlFor="checkbox" className="text-900 font-medium mr-2">
                                    He leído los
                                </label>
                                <a className="text-600 cursor-pointer hover:text-primary cursor-pointer">Términos y
                                    condiciones</a>
                            </div>
                            <Messages ref={message}/>
                            {/*<Button label="Regístrate" className="w-full mb-4" onClick={() => router.push('/')}></Button>*/}
                            <Button type="submit" label="Regístrate" className="w-full mb-4"></Button>
                            <span className="font-medium text-600">
                            ¿Ya tienes una cuenta? <Link
                                className="font-semibold cursor-pointer text-900 hover:text-primary transition-colors transition-duration-300"
                                href="/auth/login">Acceder</Link>
                        </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

Register.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig minimal/>
        </React.Fragment>
    );
};

export default Register;
