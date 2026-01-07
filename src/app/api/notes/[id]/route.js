import connectDB from "@/lib/mongodb";
import Note from "@/models/Note";

// ❌ DELETE NOTE
export async function DELETE(req, context) {
  const { id } = await context.params;

  console.log("🔥 DELETE API HIT WITH ID:", id);

  await connectDB();
  await Note.findByIdAndDelete(id);

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}

// ✏️ UPDATE NOTE (title, content, isPinned sab update ho sakta hai)
export async function PUT(req, context) {
  const { id } = await context.params;
  const body = await req.json(); // { title, content, isPinned }

  await connectDB();
  await Note.findByIdAndUpdate(id, body);

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
}
