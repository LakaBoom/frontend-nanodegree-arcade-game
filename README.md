# Classic Arcade Game Clone Project
## Website review
  https://lakaboom.github.io/frontend-nanodegree-arcade-game/
## Table of Contents

- [Instructions](#instructions)
  Functionality

  In this game, users can change the character that they love. The goal of the player is to reach the water, without colliding into one of the enemies, and collect as many as collectibles to get a higher score. The player has initially one life and zero score.
  There are 3 kinds of gems, green, blue and orange as well as heart gem. If the player collect diamonds, the score will add 10, if get the heart, the life will add 1. In addition, if the player successfully reach the water, the score will add 20 and  will get another life.

  Goal of the game:
    1. Without colliding into one of the enemies.
    2. Collect as many as collectibles to get higher score.
    3. Collect as many as heart get more lives.

  Collision happens:
    1. Scores decrease 20.
    2. Life decrease 1.

  Game over condition:
    1. When there is no more life, game over.
    2. When the player's score is negative, game over.

  Notice:
  once player step into stone area, cannot go back to grass area.



- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
