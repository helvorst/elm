module Main exposing (..)

import Html exposing (..)
import Browser
import Html.Events exposing (onClick)


main = Browser.sandbox {init = init, update = update, view = view}

type alias Model = Int
init: Model
init = 0

type Msg = Inc | Dec
update: Msg -> Model -> Model
update msg model = 
    case msg of 
        Inc -> 
            model + 1
        Dec -> 
            model - 1

view: Model -> Html Msg
view model = 
        div []
        [   button [onClick Dec] [text "-"]
            , div [] [ text (String.fromInt model) ]
            , button [onClick Inc] [text "+"]
        ]