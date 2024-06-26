<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishlistController extends Controller
{
    public function toggle(Request $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
        ]);

        $wishlist = Wishlist::where('user_id', Auth::id())->where('product_id', $request->product_id)->first();

        if ($wishlist) {
            $wishlist->delete();
            return back()->with('success', 'The product has been removed from your wishlist.');
        } else {
            Wishlist::create([
                'user_id' => Auth::id(),
                'product_id' => $request->product_id,
            ]);
            return back()->with('success', 'The product has been added to your wishlist.');
        }
    }

    public function check(Request $request, $productId)
    {
        $isInWishlist = Wishlist::where('user_id', Auth::id())->where('product_id', $productId)->exists();
        return response()->json(['isInWishlist' => $isInWishlist]);
    }
}

