### ボタンをクリックしたらactionがstoreにdispatchされる
* [+]をクリックしたらCounterコポーネントのpropであるonIncrementに代入されている関数が実行される。-> typeがINCREMENTのactionがdispatchされる
* [-]をクリックしたらCounterコポーネントのpropであるonDecrementに代入されている関数が実行される。-> typeがDECREMENTのactionがdispatchされる

### dispatchされてきたactionをstoreが受け取り、reducerを使ってstoreが管理しているstateを更新する
* src/reducers/index.jsでactionのタイプ別に変更したstateを返却してstoreの管理するstateを更新する。

### storeが更新されたのでrenderが実行されてCounterコンポーネントが再描画される
* src/index.jsでstore.subscribe(render)しているのはこのため。

