import Character from "../../entities/Character.js";
import Opponent from "../../entities/Opponent.js";
import GamePhase from "../../enums/GamePhase.js";
import SoundName from "../../enums/SoundName.js";
import { sounds, stateStack } from "../../globals.js";
import ShowResultState from "../../states/ShowResultState.js";
import DiceGame from "../DiceGame.js";

export default class ParConAs extends DiceGame {
    /**
     * A game of Par Con As, where both players take turns rolling dice until one of them rolls a pair on two dice,
     * and a one on the third. Whoever gets this roll first wins.
     * 
     * @param {Character} player 
     * @param {Opponent} opponent 
     */
    constructor(player, opponent) {
        super(player, opponent);

        // We don't care about the dice total in this game.
        this.enableDiceTotalDisplay = false;
    }

    checkRoll() {
        // If the roller got a pair and a 1, they win, otherwise switch up and keep rolling. Simple as.
        if (this.didRollPairAndOne()) {
            this.didPlayerWin = this.isPlayerTurn;
            this.gamePhase = GamePhase.Result;
            const resultMessage = this.didPlayerWin ? "You Win!\nYou rolled a pair and an ace!" : `${this.opponent.name} Wins!\nThey rolled a pair and an ace!`;
            stateStack.push(new ShowResultState(resultMessage));
            sounds.play(SoundName.GoldSack);
        } else {
            this.isPlayerTurn = !this.isPlayerTurn;
            this.gamePhase = GamePhase.ToRoll;
        }
    }

    /**
     * @returns True if two of the three dice are a pair, and the third is a one. False otherwise.
     */
    didRollPairAndOne() {
        const rolls = this.dice.map((die) => die.value);
        const aceIndex = rolls.indexOf(1);
        // If there's no ace, we don't have a winner.
        if (aceIndex === -1) {
            return false;
        }
        // Filter out the ace to determine if the remaining values are equal.
        const possiblePair = rolls.filter((value, index) => index !== aceIndex);
        return possiblePair[0] === possiblePair[1];
    }
}