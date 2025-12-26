import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";
import { ResponseDto } from "../dto/response.dto";
import { IS_DEV } from "src/config/constants";

// 捕获所有异常（包括内置异常和自定义异常）
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // 1. 处理 HTTP 内置异常（如 400/404/500）
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      // 提取错误信息（兼容 NestJS 内置异常的返回格式）
      const msg =
        typeof exceptionResponse === "string"
          ? exceptionResponse
          : exceptionResponse["message"] || "请求失败";

      response.status(HttpStatus.OK).json(ResponseDto.fail(msg, status));
      return;
    }

    // 2. 处理未知异常（如代码运行时错误）
    const msg = IS_DEV
      ? (exception as any)?.message || "未知错误"
      : "服务器内部错误";

    response.status(HttpStatus.OK).json(ResponseDto.fail(msg, 500));
  }
}
