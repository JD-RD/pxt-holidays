// Auto-generated from simulator. Do not edit.
declare namespace card {
    /**
     * Write text on the card
     * @param text text to write on the card, eg: "Joyeuses fêtes!"
     */
    //% weight=90
    //% blockId="say" block="dire %text"
    //% shim=card::say
    function say(text: string): void;

    /**
     * Set the card background
     */
    //% weight=89
    //% blockId="setBackground" block="Mettre l'arrière plan %color=colorNumberPicker2"
    //% shim=card::setBackground
    function setBackground(color: number): void;

    //% weight=89
    //% blockId="setIcon" block="mettre l'icône %icon=main_iconPicker"
    //% shim=card::setIcon
    function setIcon(icon: number): void;

    //% blockId="main_iconPicker" block="%input" shim=TD_ID
    //% blockHidden=true
    //% input.fieldEditor="imagedropdown" input.fieldOptions.columns=6
    //% shim=card::_iconPicker
    function _iconPicker(input: Icon): number;

    /**
     * Set the animation on the lights
     */
    //% blockId="randomColor" block="couleur aléatoire"
    //% weight=89
    //% shim=card::randomColor
    function randomColor(): number;

}
declare namespace loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    //% help=functions/forever weight=99 blockGap=8
    //% blockId=device_forever block="toujours" blockAllowMultiple=true
    //% shim=loops::forever
    function forever(body: () => void): void;

    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 1, 2, 5
     */
    //% help=functions/pause weight=98
    //% block="attendre %pause|seconde(s)" blockId=device_pause
    //% s.defl="1"
    //% shim=loops::pauseAsync promise
    function pause(s: number): void;

}
declare namespace lights {
    /**
     * Set the lights
     */
    //% weight=89
    //% blockId="setLightColor" block="mettre les lumières %color=colorNumberPicker2"
    //% shim=lights::setLightColor
    function setLightColor(color: number): void;

    /**
     * Clear the lights
     */
    //% weight=89
    //% blockId="clearLights" block="enlever les lumières"
    //% shim=lights::clearLights
    function clearLights(): void;

    /**
     * Set the animation on the lights
     */
    //% blockId="setLightAnimation" block="show %animation=light_animation_picker"
    //% weight=89 blockHidden=1
    //% shim=lights::setLightAnimation
    function setLightAnimation(animation: number): void;

    //% blockId="light_animation_picker" block="%animation" shim=TD_ID
    //% blockHidden=true
    //% shim=lights::_animationPicker
    function _animationPicker(animation: LightAnimation): number;

}

// Auto-generated. Do not edit. Really.
