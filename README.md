# Dungeon of Greed

A game made for Ludum Dare 42 "running out of space". Dungeon of greed is
an unfinished game, but then I entered the competition suddenly and without
any preparation or knowledge of game engines.

Please note that the images are from flaticons.com, except for the player
that has been generated with https://0x72.itch.io/pixeldudesmaker

## Original concept

The original idea was to make a 10-levels dungeon game. The player's inventory
has limited slots and can't drop items.

While no item is essential to advance, some make it very easy, so the player
must go look for these items. At the same time, the game spawns useless, shiny
objects e.g. gold.

Some items might be guarded by a monster that needs to be defeated. For example,
a treasure chest might be guarded by a spider. If the player picked up a sword,
the fight will be easy, but given the limited number of slots, chosing not pick
up the sword might leave a slot for a powerful weapon later.

At the end of the game, a score would be given based on the value of the items
collected, with items from latest levels being worth more, so that a player is
also encouraged to pick up items as late as possible.

The game was meant to be hard-ish and would require careful choice of which item
to pick and when.

## Installing

Get the game with git, install deps and run the game:

```
git clone https://github.com/Vesuvium/dungeon-of-greed.git
cd dungeon-of-greed
npm install
npm start
```

## Playing

- Move with WASD keys
