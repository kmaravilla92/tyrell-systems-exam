<?php
namespace Kmaravilla\PlayingCardsExam\Enums;

enum CardSuit: string
{
    case Hearts     = 'H';
    case Diamonds   = 'D';
    case Clubs      = 'C';
    case Spades     = 'S';

    public function getName(): string
    {
        return $this->name;
    }

    public function getColor()
    {
        return match($this) {
            static::Hearts, static::Diamonds => '#f00',
            static::Clubs, static::Spades => '#000',
        };
    }
}