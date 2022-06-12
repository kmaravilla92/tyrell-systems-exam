<?php
namespace Kmaravilla\PlayingCardsExam\Enums;

enum CardValue: string
{
    case Ace    = 'A';
    case Two    = '2';
    case Three  = '3';
    case Four   = '4';
    case Five   = '5';
    case Six    = '6';
    case Seven  = '7';
    case Eight  = '8';
    case Nine   = '9';
    case Ten    = 'X'; // Alias is X based on the exam instructions
    case Jack   = 'J';
    case Queen  = 'Q';
    case King   = 'K';

    public function getName(): string
    {
        return $this->name;
    }

    public function getNumericValue(): string
    {
        return match($this) {
            static::Ace     => 1,
            static::Two     => 2,
            static::Three   => 3,
            static::Four    => 4,
            static::Five    => 5,
            static::Six     => 6,
            static::Seven   => 7,
            static::Eight   => 8,
            static::Nine    => 9,
            static::Ten     => 10,
            static::Jack    => 11,
            static::Queen   => 12,
            static::King    => 13,
        };
    }
}