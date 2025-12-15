# DadosDeToledo

This project is a game inspired be real, historical dice games described in the 13th century Spanish work by king Alfonso X of Castile, *Libro de los juegos* (Book of Games) or *Libro de axedrez, dados e tablas* (Book of Chess, Dice, and Tables).  
The games recreated are Riffa, Triga, and Panquist, three simple games of chance which each make use of three dice.  
The rules for each are as follows:

**Riffa:** This is the simplest game. Each player has 3 dice and they roll them until they get a pair on 2 of the dice. They then roll the third die one last time and add up the dice total. Whoever has the higher total wins the round's wager.  

**Triga:** Each player has 3 dice. On the first round, the player/opponent rolls their dice and adds up the values. If the total is below 7 or above 14, or they roll three of a kind, this is the Triga, and they win immediately. If the total is any value from 7 to 14, this value becomes their mark. The next player then rolls and does the same, winning on a Triga or getting a mark. If, however, a player rolls the other player's mark, the other player whose mark it is wins. Once each player has a mark, both players take turns rolling (with no more chances of winning on a Triga). From here, if a player rolls their own mark they win, but if they roll the opponent's mark, they lose.  

**Panquist:** Each player has 3 dice. Each player rolls until they get a value between 7 and 14 (inclusive) which becomes their mark. The players then keep rolling until they hit their own mark, in which case they win, or their opponent's mark, in which case they lose. How much is won is based on the precise values of each die when the mark is reached, with the winner getting either a quarter, half, two thirds, or all of the wager (the last being called a Panquist). The possible wins are as follows:  
| Mark Total | 1/4            | 1/2            | 3/4            | Panquist |
|------------|----------------|----------------|----------------|----------|
| 7          | n/a            | 5+1+1 or 4+2+1 | 2+2+3          | 3+3+1    |
| 8          | 5+2+1          | 4+3+1          | 6+1+1 or 2+2+4 | 3+3+2    |
| 9          | 6+2+1 or 5+3+1 | 4+3+2          | 2+2+5 or 3+3+3 | 4+4+1    |
| 10         | 5+4+1 or 5+3+2 | 6+3+1          | 2+2+6 or 4+3+3 | 4+4+2    |
| 11         | 6+3+2 or 5+4+2 | 6+4+1          | 5+5+1 or 4+4+3 | 3+3+5    |
| 12         | 6+5+1 or 6+4+2 | 5+4+3          | 5+5+2 or 4+4+4 | 3+3+6    |
| 13         | 6+5+2          | 6+4+3          | 6+6+1 or 5+5+3 | 4+4+5    |
| 14         | n/a            | 6+5+3          | 6+6+2 or 5+5+4 | 4+4+6    |

### More Info
This project was originally created as the final project for a game programming course in Fall 2025. Files in the lib folder were created throughout the semester by my teacher, Vikram Singh. The rest of the code is my own. Assets that were not created by me or made available through the public domain are credited accordingly.

This project is still a work in progress.
