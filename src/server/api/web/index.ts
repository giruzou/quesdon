import * as Router from "koa-router"
import oauthRouter from "./oauth"
import accountsRouter from "./accounts"
import questionsRouter from "./questions"

var router = new Router

router.use("/oauth", oauthRouter.routes())
router.use("/accounts", accountsRouter.routes())
router.use("/questions", questionsRouter.routes())

export default router