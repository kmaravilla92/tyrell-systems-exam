<?php
namespace Kmaravilla\PlayingCardsExam;

use Exception;
use Kmaravilla\PlayingCardsExam\CardsDistributor;

require_once '../vendor/autoload.php';

error_reporting(-1);

$response = [];

try {
    $max_players = $_GET['max_players'] ?? 1;
    $card_distributor = new CardsDistributor($max_players);
    $card_distributor->distributeCards();
    $players = $card_distributor->getPlayers();

    $response = ['success' => true, 'data' => $players];
} catch (Exception $e) {
    $response = ['error' => true, 'message' => $e->getMessage()];
}

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

exit(
    json_encode($response)
);