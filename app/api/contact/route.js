"use server";

import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        const formData = new URLSearchParams();
        formData.append("entry.855404843", body.name);
        formData.append("entry.1729519054", body.email);
        formData.append("entry.1849600877", body.phone);
        formData.append("entry.1229717348", body.message);
        formData.append("entry.2146129125", body.company);

        await fetch(
            "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdiotGabLDhUKV6MBYJIe4LqXT_9iva_M_yfgF6dX5ar8G5XQ/formResponse",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formData.toString(),
            },
        );

        return NextResponse.json({
            ok: true,
            status: JSON.stringify(body),
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { ok: false, status: error.message },
            { status: 500 }
        );
    }
}
