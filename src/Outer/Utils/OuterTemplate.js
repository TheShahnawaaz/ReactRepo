import React from "react";
import logo_dotcom1 from '../Images/logo_dotcom1.png'
import $ from 'jquery';

export default function OuterTemplate(props) {

    $(document).ready(function () {
        $(".outer-input-container input").focus(function () {
            $(this)
                .parent(".outer-input-container")
                .css("transform", "scale3d(0.97, 0.97, 1)");
            $(this)
                .parent(".outer-input-container")
                .css("transition", "transform 0.3s");
        });
        $(".outer-button").hover(
            function () {
                $(this).css("transform", "scale3d(0.98,0.98, 1)");
                $(this).css("transition", "transform 0.3s");
            },
            function () {
                $(this).css("transform", "scale3d(1, 1, 1)");
                $(this).css("transition", "transform 0.3s");
            }
        );

        $(".outer-input-container").focusout(function () {
            $(this).css("transition", "transform 0.3s");
            $(this).css("transform", "scale3d(1, 1, 1)");
        });
    });

    return (
        <div class="outer-body">
            <div class="outer-root">
                <div class="outer-image-container">
                    <img src={logo_dotcom1} alt="Error" />
                </div>
                <img
                    className="outer-login-img"
                    width="50px"
                    src={props.image2}
                    alt="GIF"
                />
                <div className="outer-title"
                >{props.title}</div>
                {props.children}
            </div>
        </div>
    );



}