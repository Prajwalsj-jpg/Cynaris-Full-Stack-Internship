<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Details</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f6f9;
            padding: 40px;
        }

        .container {
            max-width: 500px;
            margin: auto;
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        .detail {
            padding: 12px;
            border-bottom: 1px solid #ddd;
        }

        .label {
            font-weight: bold;
            color: #555;
        }

        .back {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #2563eb;
            text-decoration: none;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Student Details</h1>

    <div class="detail">
        <span class="label">ID:</span>
        {{ $student->id }}
    </div>

    <div class="detail">
        <span class="label">Name:</span>
        {{ $student->name }}
    </div>

    <div class="detail">
        <span class="label">Email:</span>
        {{ $student->email }}
    </div>

    <div class="detail">
        <span class="label">Course:</span>
        {{ $student->course }}
    </div>

    <a href="{{ route('students.index') }}" class="back">
        ← Back to Students
    </a>

</div>

</body>
</html>