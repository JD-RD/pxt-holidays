/// <reference path="../libs/core/enums.d.ts" />
/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts" />
declare namespace pxsim.card {
    /**
     * Write text on the card
     * @param text text to write on the card, eg: "Joyeuses fêtes!"
     */
    function say(text: string): void;
    /**
     * Set the card background
     */
    function setBackground(color: number): void;
    function setIcon(icon: number): void;
    function _iconPicker(input: Icon): number;
    /**
     * Set the animation on the lights
     */
    function randomColor(): number;
}
declare namespace pxsim.loops {
    /**
     * Repeats the code forever in the background. On each iteration, allows other code to run.
     * @param body the code to repeat
     */
    function forever(body: RefAction): void;
    /**
     * Pause for the specified time in milliseconds
     * @param ms how long to pause for, eg: 1, 2, 5
     */
    function pauseAsync(s: number): Promise<void>;
}
declare namespace pxsim.lights {
    /**
     * Set the lights
     */
    function setLightColor(color: number): void;
    /**
     * Clear the lights
     */
    function clearLights(): void;
    /**
     * Set the animation on the lights
     */
    function setLightAnimation(animation: number): void;
    function _animationPicker(animation: LightAnimation): number;
}
declare let Phaser: any;
declare namespace pxsim {
    interface ISimMessage {
        type: "simulator.message";
        key?: string;
        data?: string;
    }
    /**
     * Gets the current 'board', eg. program state.
     */
    function board(): Board;
    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    class Board extends pxsim.BaseBoard {
        private game;
        private gameLoaded;
        constructor();
        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void>;
        initPhaser(): void;
        getGame(): any;
        preload(): void;
        lookupIcon(icon: string): "" | "balloons" | "barbecue" | "bauble" | "baubles" | "bell" | "candies" | "candycane" | "christmas-sock" | "christmas-tree" | "church" | "firecracker" | "fireworks-1" | "fireworks-2" | "fireworks" | "gift" | "mistletoe" | "mittens" | "reindeer" | "ribbon" | "santa" | "sledge" | "snowflake-1" | "snowflake-2" | "snowflake" | "snowman" | "kwanzaa1" | "kwanzaa2" | "kwanzaa3" | "kwanzaa4" | "kwanzaa5" | "stlucia" | "hebrew1" | "hebrew2" | "hebrew3" | "yarmulke";
        create(): void;
        private textElement;
        setText(text: string): void;
        private iconElement;
        showIcon(icon: string): void;
        private lightGraphics;
        private lightArc;
        drawLights(lightBuffer: string[]): void;
        clearLights(): void;
        private calcCircleCenter(A, B, C);
        update(): void;
        isGameInitialized(): boolean;
        updateView(): void;
        resizeGame(width: number, height: number): void;
        kill(): void;
        receiveMessage(msg: SimulatorMessage): void;
        sendMessage(key: string, data: string): void;
    }
}
