<?php
namespace Kmaravilla\PlayingCardsExam;

use Kmaravilla\PlayingCardsExam\Card;
use JsonSerializable;

class PlayerCards implements JsonSerializable
{
    protected array $cards = [];

    public function addCard(Card $card): PlayerCards
    {
        $this->cards[] = $card;
        return $this;
    }

    public function jsonSerialize(): array
    {
        return $this->cards;
    }
}