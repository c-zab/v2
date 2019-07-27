<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Message;

class MessagesController extends Controller
{
    public function store(Request $request)
    {
        $validateData = $request->validate([
					'name' => 'required',
					'email' => 'required',
					'subject' => 'required',
					'message' => 'required'
				]);

        $message = new Message();
        $message->name = request('name');
        $message->email = request('email');
        $message->subject = request('subject');
        $message->message = request('message');

        // $message->save();

        return ['message' => 'Message sended!'];
    }
}
