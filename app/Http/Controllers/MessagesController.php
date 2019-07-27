<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Message;

class MessagesController extends Controller
{
    public function store(Request $request)
    {
        $validateData = $request->validate([
					'name' => 'required|max:25',
					'email' => 'required|email',
					'subject' => 'required|max:35',
					'message' => 'required|max:200'
				]);

        $message = new Message();
        $message->name = request('name');
        $message->email = request('email');
        $message->subject = request('subject');
        $message->message = request('message');

				$message->save();

				$response = [
					'message' => 'Message sended!',
					'clientName' => $message->name
				];
        return $response;
    }
}
