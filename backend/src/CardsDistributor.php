<?php
namespace Kmaravilla\PlayingCardsExam;

use Kmaravilla\PlayingCardsExam\Enums\CardSuit;
use Kmaravilla\PlayingCardsExam\Enums\CardValue;

class CardsDistributor
{
    protected int $max_players = 0;

    protected int $max_shuffles = 1;

    protected array $players = [];

    protected int $max_round_distribution = 0;

    protected array $cards = [];

    public function __construct($max_players = 0, $max_shuffles = 1)
    {
        $this->max_players  = $max_players < 1 ? 1 : $max_players;
        $this->max_shuffles = $max_shuffles < 1 ? 1 : $max_shuffles;
    }

    protected function initMaxRoundDistribution(): CardsDistributor
    {
        $this->max_round_distribution = floor(count($this->cards) / $this->max_players);

        return $this;
    }

    protected function shuffleCards(): CardsDistributor
    {
        for ($i = 0; $i < $this->max_shuffles; $i++) {
            shuffle($this->cards);
        }

        return $this;
    }

    protected function initPlayers(): CardsDistributor
    {
        $players = range(1, $this->max_players);

        $this->players = array_map(
            function ($player_number) {
                $player = new Player($player_number);
                $player->setCards(
                    new PlayerCards($player)
                );
                return $player;
            },
            $players
        );

        return $this;
    }

    protected function initCards(): CardsDistributor
    {
        foreach (CardSuit::cases() as $suit) {
            foreach (CardValue::cases() as $value) {
                $card = new Card();
                $card
                    ->setSuit($suit)
                    ->setValue($value);

                $this->cards[] = $card;
            }
        }

        return $this;
    }

    protected function assignCardsToPlayers(): CardsDistributor
    {
        $j = 0;
        while ($j < $this->max_round_distribution) {
            $i = 0;
            while ($i < $this->max_players) {
                $player = $this->players[$i];
                $card = array_shift($this->cards);
                $player->getCards()->addCard($card);
                $i++;
            }
            $j++;
        }

        return $this;
    }

    public function distributeCards(): CardsDistributor
    {
        return $this
                ->initPlayers()
                ->initCards()
                ->shuffleCards()
                ->initMaxRoundDistribution()
                ->assignCardsToPlayers();
    }

    public function getPlayers(): array
    {
        return $this->players;
    }

    public function getCards(): array
    {
        return $this->cards;
    }
}