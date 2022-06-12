<?php
namespace Kmaravilla\PlayingCardsExam;

use Kmaravilla\PlayingCardsExam\Enums\CardSuit;
use Kmaravilla\PlayingCardsExam\Enums\CardValue;
use JsonSerializable;

class Card implements JsonSerializable
{
    protected CardSuit $suit;

    protected CardValue $value;

    public function setSuit(CardSuit $suit)
    {
        $this->suit = $suit;

        return $this;
    }

    public function setValue(CardValue $value)
    {
        $this->value = $value;

        return $this;
    }

    public function getSuit(): CardSuit
    {
        return $this->suit;
    }

    public function getValue(): CardValue
    {
        return $this->value;
    }

    public function jsonSerialize(): array
    {
        $suit   = $this->getSuit();
        $value  = $this->getValue();

        return [
            'suit'                  => $suit->getName(),
            'suit_alias'            => $suit,
            'suit_color'            => $suit->getColor(),
            'card_value'            => $value->getName(),
            'card_value_alias'      => $value,
            'card_numeric_value'    => $value->getNumericValue(),
            'is_face_card'          => in_array($value->value, ['J', 'Q', 'K']),
        ];
    }
}