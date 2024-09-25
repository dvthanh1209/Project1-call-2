<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chuyển Văn Bản Thành Giọng Nói</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #282c34; /* Màu nền đơn giản */
            color: white;
        }
        input {
            padding: 10px;
            margin: 10px 0;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            width: calc(100% - 22px);
        }
        button {
            padding: 10px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            background-color: #007BFF;
            color: white;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        h1 {
            text-align: center;
        }
        .container {
            max-width: 500px;
            margin: 0 auto;
            text-align: center;
            background: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 10px;
        }
        #downloadMessage {
            margin-top: 20px;
            color: yellow;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Chuyển Văn Bản Thành Giọng Nói</h1>
        <input type="text" id="nameInput" placeholder="Nhập văn bản của bạn" />
        <button id="speakButton">Đọc Văn Bản</button>
        <div id="downloadMessage" style="display:none;">Đang tải âm thanh, vui lòng chờ...</div>
    </div>

    <script src="Source.js"></script>
</body>
</html>
