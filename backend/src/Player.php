<?php
namespace Kmaravilla\PlayingCardsExam;

use Kmaravilla\PlayingCardsExam\Enums\CardSuit;
use Kmaravilla\PlayingCardsExam\Enums\CardValue;
use Kmaravilla\PlayingCardsExam\PlayerCards;
use JsonSerializable;

class Player implements JsonSerializable
{
    protected int $number;

    protected PlayerCards $cards;

    public function __construct(int $number)
    {
        $this->number = $number;
    }

    public function setCards(PlayerCards $cards): Player
    {
        $this->cards = $cards;
        return $this;
    }

    public function getNumber(): int
    {
        return $this->number;
    }

    public function getCards(): PlayerCards
    {
        return $this->cards;
    }

    public function jsonSerialize(): array
    {
        return [
            'number' => $this->number,
            'cards' => $this->getCards()
        ];
    }
}