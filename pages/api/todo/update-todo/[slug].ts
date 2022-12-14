import type { NextApiRequest, NextApiResponse } from "next"
import axios from "axios"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { slug } = req.query
    console.log(slug)
    axios
        .put(
            `${process.env.NEXT_PUBLIC_API_ROOT}/todo/${slug}`, req.body
        )
        .then((response) => {
            res.status(200).json(response.data)
        })

        .catch((error) => res.status(500).send(error))
}

export const config = {
    api: {
        externalResolver: true,
    },
}